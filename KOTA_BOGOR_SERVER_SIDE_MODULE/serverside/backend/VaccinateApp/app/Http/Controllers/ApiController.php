<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Carbon\Carbon;

class ApiController extends Controller
{
    public function consultations(Request $request)
    {
        $user = User::where(['login_tokens'=>$_GET['token']])->first();
        switch ($request->method()) {
            case 'POST':
                if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
                    DB::table('consultations')->insert([
                        'disease_history'=>$request->disease_history,
                        'current_symptoms'=>$request->current_symptoms,
                        'society_id' => $user->id
                    ]);
                    return response()->json(['message'=>'Request consultation sent successfully'], 200);
                } else {
                    return response()->json(["message" => "Unauthorized user"], 401);
                }
                break;
            case 'GET':

                if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
                    $data = DB::table('consultations')->where(['society_id'=>$user->id])->first();
                    return response()->json($data, 200);
                } else {
                    return response()->json(["message" => "Unauthorized user"], 401);
                }

                break;
            default:
                break;
        }
    }

    public function vaccinations(Request $request)
    {
        $user = User::where(['login_tokens'=>$_GET['token']])->first();
        switch ($request->method()) {
            case 'POST':

                if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
                    if (DB::table('vaccinations')->where('society_id', $user->id)->count() == 2) {
                        return response()->json(["message"=> "Society has been 2x vaccinated"], 401);
                    }
                    $timevacc = 1;
                    if (!is_null($vaccUser = DB::table('vaccinations')->where('society_id', $user->id)->first())) {
                        $timevacc = $vaccUser->dose;
                    }
                    if (!is_null(DB::table('consultations')->where(['society_id'=>$user->id])->first())) {
                        if (DB::table('consultations')->where(['society_id'=>$user->id])->first()->status != 'accepted') {
                            return response()->json(["message"=> "Your consultation must be accepted by doctor before"], 401);
                        }
                    } elseif ($timevacc == 2) {
                        $date1=date_create($vaccUser->date);
                        $date2=date_create(Carbon::now()->toDateString('Y-m-d'));
                        $diff=date_diff($date1, $date2);
                        if ($diff->days < 30) {
                            return response()->json(["message"=> "Wait at least +30 days from 1st Vaccination"], 401);
                        } else {
                            DB::table('vaccinations')->insert([
                        'dose'=>2,
                        'date'=>isset($request->date) ? $request->date : Carbon::now(),
                        'spot_id'=>$request->spot_id,
                        'society_id' => $user->id
                    ]);

                            return response()->json(['message'=>'Second vaccination registered successful'], 200);
                        }
                    }

                    DB::table('vaccinations')->insert([
                    'dose'=>1,
                    'date'=>isset($request->date) ? $request->date : Carbon::now(),
                    'spot_id'=>$request->spot_id,
                    'society_id' => $user->id
                ]);


                    return response()->json(['message'=>'First vaccination registered successful'], 200);
                } else {
                    return response()->json(["message" => "Unauthorized user"], 401);
                }



                break;

            case 'GET':

                if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
                    $solve = [];
                    $vacc = DB::table('vaccinations')->where(['society_id'=>$user->id])->get();
                    foreach ($vacc as $key => $value) {
                        if ($value->dose == 1) {
                            $queue = 'first';
                            $sp =(array)DB::table('spots')->where(['id'=>$value->spot_id])->first();

                            $sp['regional'] = (array)DB::table('regionals')->where(['id'=>$sp['regional_id']])->first();

                            $vc = DB::table('vaccines')->where(['id'=>$value->vaccine_id])->first();

                            $doc =  DB::table('medicals')->where(['id'=>$value->doctor_id,'role'=>'doctor'])->first();
                            $off =  DB::table('medicals')->where(['id'=>$value->officer_id,'role'=>'officer'])->first();


                            $solve[$queue] = (array)$value;
                            $solve[$queue]['spot'] = (array)$sp;
                            $solve[$queue]['vaccine'] = (array)$vc;
                            $solve[$queue]['vaccinator'] = (array)$doc;
                        } elseif ($value->dose == 2) {
                            $queue = 'seconds';
                            $sp =(array)DB::table('spots')->where(['id'=>$value->spot_id])->first();
                            $sp['regional'] = (array)DB::table('regionals')->where(['id'=>$sp['regional_id']])->first();

                            $vc = DB::table('vaccines')->where(['id'=>$value->vaccine_id])->first();


                            $doc =  DB::table('medicals')->where(['id'=>$value->doctor_id,'role'=>'doctor'])->first();
                            $off =  DB::table('medicals')->where(['id'=>$value->officer_id,'role'=>'officer'])->first();


                            $solve[$queue] = (array)$value;
                            $solve[$queue]['spot'] = (array)$sp;
                            $solve[$queue]['vaccine'] = (array)$vc;
                            $solve[$queue]['vaccinator'] = (array)$doc;
                        }
                    }



                    return response()->json(['vaccinations'=>$solve], 200);
                } else {
                    return response()->json(["message" => "Unauthorized user"], 401);
                }



                break;

            default:
                break;
        }
    }

    public function spots(Request $request)
    {
        if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
            $solve = [];
            $spots = DB::table('spots')->get();

            foreach ($spots as $key => $value) {
                $solve[$key] = $value;

                $vc = [];
                foreach (DB::table('spot_vaccines')->where(['spot_id'=>$value->id])->get() as $keys => $item) {
                    $vacc = DB::table('vaccines')->where('id', $item->vaccine_id)->first();
                    $vc[$vacc->name] = true;
                }
                $solve[$key]->available_vaccines = $vc;
            }

            return response()->json(['spots'=>$solve], 200);
        } else {
            return response()->json(["message" => "Unauthorized user"], 401);
        }
    }

    public function detailSpots(Request $request, $id)
    {
        if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
            $solve = [];
            if (isset($_GET['date'])) {
                $spots = DB::table('spots')->where('id', $id)->first();
                $vacc = DB::table('vaccinations')->where(['date'=>$_GET['date'],'spot_id'=>$id])->count();

                $solve['date'] = $_GET['date'];
                $solve['spot'] = $spots;
                $solve['vaccinations_count'] = $vacc;
            } else {
                $spots = DB::table('spots')->where('id', $id)->first();
                $vacc = DB::table('vaccinations')->where(['date'=>Carbon::now()->toDateString('Y-m-d'),'spot_id'=>$id])->count();

                $solve['date'] = Carbon::now()->toDateString('Y-m-d');
                $solve['spot'] = $spots;
                $solve['vaccinations_count'] = $vacc;
            }
            return response()->json((object)$solve, 200);
        } else {
            return response()->json(["message" => "Unauthorized user"], 401);
        }
    }
}
