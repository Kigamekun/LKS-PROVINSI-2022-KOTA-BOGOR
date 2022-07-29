import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';
import $ from 'jquery';




const CreateConsult = () => {

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const logout = (event) => {
        localStorage.clear();
        window.location.href = '/login';
    }

    

    const createCon = async (event) => {

        event.preventDefault();
        var res = await axios.post(process.env.REACT_APP_API_URL + "/api/v1/consultations?token=" + loggedInUser.token, {
            'disease_history': $('#disease-history').val(),
            'current_symptoms': $('#current-symptoms').val(),

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
                                    <a className="nav-link" href="#">{loggedInUser.name}</a>
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
                        <div className="container">
                            <h1 className="display-4">Request Consultation</h1>
                        </div>
                    </header>
                    {/* E: Header */}
                    <div className="container">
                        <form onSubmit={createCon}>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="d-flex align-items-center mb-3">
                                            <label htmlFor="disease-history" className="mr-3 mb-0">Do you have disease history ?</label>
                                            <select className="form-control-sm">
                                                <option value="yes">Yes, I have</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <textarea id="disease-history" className="form-control" cols={30} rows={10} placeholder="Describe your disease history" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <div className="d-flex align-items-center mb-3">
                                            <label htmlFor="current-symptoms" className="mr-3 mb-0">Do you have symptoms now ?</label>
                                            <select className="form-control-sm">
                                                <option value="yes">Yes, I have</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <textarea id="current-symptoms" className="form-control" cols={30} rows={10} placeholder="Describe your current symptoms" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary">Send Request</button>
                        </form>
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
                {/* E: Footer */}
            </div>

        </div>
    );
}

export default CreateConsult;
