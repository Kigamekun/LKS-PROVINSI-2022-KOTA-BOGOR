import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import '../assets/css/custom.css';
import '../assets/css/bootstrap.css';

const Login = () => {

    const [idCardNumber, setIdCardNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const submitHandler = async (event) => {
        event.preventDefault();
        var res = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/auth/login', {
            'id_card_number': idCardNumber,
            'password': password,
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login Successfully !',
                    showConfirmButton: false,
                    timer: 1500
                })

                localStorage.setItem("user", JSON.stringify(res.data));
                navigate('/dashboard');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                showConfirmButton: false,
                timer: 1500
            })
        });
    }
    // localStorage.clear();

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    if (loggedInUser === null) {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                        <div className="container">
                            <a className="navbar-brand" href="#">Vaccination Platform</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Login</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <header className="jumbotron">
                            <div className="container text-center">
                                <h1 className="display-4">Vaccination Platform</h1>
                            </div>
                        </header>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <form onSubmit={submitHandler} className="card card-default">
                                        <div className="card-header">
                                            <h4 className="mb-0">Login</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row align-items-center">
                                                <div className="col-4 text-right">ID Card Number</div>
                                                <div className="col-8"><input type="text" className="form-control" onChange={(event) => setIdCardNumber(event.target.value)} /></div>
                                            </div>
                                            <div className="form-group row align-items-center">
                                                <div className="col-4 text-right">Password</div>
                                                <div className="col-8"><input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} /></div>
                                            </div>
                                            <div className="form-group row align-items-center mt-4">
                                                <div className="col-4" />
                                                <div className="col-8"><button className="btn btn-primary">Login</button></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    } else {
        window.location.href='/login'
    }

}

export default Login;
