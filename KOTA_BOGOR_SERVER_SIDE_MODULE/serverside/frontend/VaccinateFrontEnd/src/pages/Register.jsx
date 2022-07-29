import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router,useNavigate, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2'
import {
    Navigate
} from "react-router-dom";

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + '/api/register', {
            'name': name,
            'email': email,
            'password': password,
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Register Successfully !',
                    showConfirmButton: false,
                    timer: 1500

                })
                window.location.href = '/login';
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        });
    }
    // localStorage.clear();

    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log(loggedInUser);
    if (loggedInUser === null) {
        return (
            <div>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '100vh' }}>
                        <div className="card" style={{ width: '18rem' }}>
                            <form onSubmit={submitHandler}>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="text" className="form-label">Name</label>
                                        <input type="text" name='name' onChange={(event) => setName(event.target.value)} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="text" name='email' onChange={(event) => setEmail(event.target.value)} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" name='password' onChange={(event) => setPassword(event.target.value)} className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-outline-info w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div >
            </div>
        );
    } else {
        navigate('/');
    }

}

export default Register;
