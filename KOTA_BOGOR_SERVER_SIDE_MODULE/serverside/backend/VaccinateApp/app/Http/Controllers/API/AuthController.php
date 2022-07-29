<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['data' => $user,'access_token' => $token, 'token_type' => 'Bearer', ]);
    }




    public function login(Request $request)
    {

        if (!is_null($user = User::select('name','born_date','gender','address','regional_id')->where(['id_card_number'=>$request->id_card_number,'password'=>$request->password])->first())) {
            $token = Hash::make(Carbon::now()->timestamp);

            User::where(['id_card_number'=>$request->id_card_number,'password'=>$request->password])->update([
                'login_tokens'=>$token
            ]);
            $user->token = $token;


            $user->regional_id = DB::table('regionals')->select('province','district')->where('id', '=', $user->regional_id)->first();
            return response()->json($user);
        }else {
            return response()
            ->json(["message"=>"ID Card Number or Password incorrect"], 401);
        }
    }

    // method for user logout and delete token
    public function logout()
    {

        if (!is_null(User::where(['login_tokens'=>$_GET['token']])->first())) {
            User::where(['login_tokens'=>$_GET['token']])->update(['login_tokens'=>NULL]);
            return [
                "message"=>"Logout success"
            ];
        }else {

            return [
                "message"=> "Invalid token"
            ];
        }

    }
}
