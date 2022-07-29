import React, { useEffect, useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router, useNavigate, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';


const VaccinateDetails = (props) => {
    let { identifier } = useParams();

    const [date, setDate] = useState();
    const [spot, setSpot] = useState([]);
    const [capacity, setCapacity] = useState(0);
    const [vaccin, setVaccin] = useState(0);

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const getVaccineDetails = async () => {
        var res = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/spots/' + identifier + '?token=' + loggedInUser.token)
            .then(function (response) {
                setDate(response.data.date);
                setSpot(response.data.spot);
                setCapacity(response.data.spot.capacity);
                setVaccin(response.data.vaccinations_count);
            }).catch(function (error) {

            })

    }
    useEffect(() => {

        getVaccineDetails();
    }, [identifier]);


    const registerVaccine = async (event) => {
        var res = await axios.post(process.env.REACT_APP_API_URL + "/api/v1/vaccinations?token=" + loggedInUser.token, {
            'date': $('#date').val(),
            'spot_id': identifier,

        }).then(function (response) {

            console.log(response);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: response.data.message,
                showConfirmButton: false,
                timer: 1500

            })
        }).catch(function (error) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        })


    }

    const logout = (event) => {
        localStorage.clear();
        window.location.href = '/login';
    }



    return (

        <div>
            {console.log('hi')}
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                    <div className="container">
                        <a className="navbar-brand" href="/dashboard">Vaccination Platform</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">{loggedInUser.name}</a>
                                </li>
                                <li className="nav-item">
                                    <button onClick={logout} className="btn btn-danger">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <main>
                    {/* S: Header */}
                    <header className="jumbotron">
                        <div className="container d-flex justify-content-between align-items-center">
                            <div>
                                <h1 className="display-4">{spot.name}</h1>
                                <span className="text-muted">{spot.address}</span>
                            </div>
                            <button onClick={registerVaccine} className="btn btn-primary">Register vaccination</button>
                        </div>
                    </header>
                    {/* E: Header */}
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label htmlFor="vaccination-date">Select vaccination date</label>
                                    <input type="date" id="date" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-5">

                            {
        
                                [...Array(capacity / 5)].map((elementInArray, index) => (
                                    <div className="col-md-4">
                                        <div className="card card-default">
                                            <div className="card-body">
                                                <div className="d-flex align-items-center justify-content-between mb-3">
                                                    <h4>Session {index + 1}</h4>
                                                    <span className="text-muted">09:00 - 11:00</span>
                                                </div>
                                                <div>
                                                    <div className="row">
                                                        {
                                                            [...Array(capacity / 3)].map((e, x) => (
                                                                <div>
                                                                    <div className="col-4 mb-4">
                                                                        {
                                                                            ((index + 1) * (x + 1)) <= vaccin ?
                                                                                <div className="slot filled"> #{x + 1} </div> :
                                                                                ''
                                                                        }
                                                                        {
                                                                            ((index + 1) * (x + 1)) === 0 ?
                                                                                <div className="slot bg-primary text-white"> #{x + 1} </div> :
                                                                                ''
                                                                        }
                                                                        {
                                                                            ((index + 1) * (x + 1)) === vaccin ?
                                                                                <div className="slot bg-primary text-white"> #{x + 1} </div> :
                                                                                ''
                                                                        }
                                                                        {
                                                                            ((index + 1) * (x + 1)) >= vaccin ?
                                                                                <div className="slot"> #{x + 1} </div> :
                                                                                ''
                                                                        }


                                                                    </div>
                                                                </div>
                                                            ))

                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                            {/* E: Session 1 */}
                            {/* S: Session 2 */}


                            {/* E: Session 3 */}
                        </div>



                    </div>
                </main>
                {/* S: Footer */}
                <footer>
                    <div className="container">
                        <div className="text-center py-4 text-muted">
                            Copyright © 2021 - Web Tech ID
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    );
}

export default VaccinateDetails;
