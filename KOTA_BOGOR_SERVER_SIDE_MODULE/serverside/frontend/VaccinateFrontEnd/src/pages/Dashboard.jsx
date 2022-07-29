import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2';

const Dashboard = () => {

    const [show, setShow] = useState(false);
    const [showModalVaccine, setShowModalVaccine] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowModalVaccine = () => setShowModalVaccine(true);
    const handleCloseModalVaccine = () => setShowModalVaccine(false);


    const [consulation, setConsulation] = useState({});
    const [vaccination, setVaccination] = useState({});



    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const getConsultation = async (event) => {
        var res = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/consultations?token=' + loggedInUser.token)
        setConsulation(res.data.consultation);
    }



    const getVaccination = async (event) => {
        var res = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/vaccinations?token=' + loggedInUser.token)
        setVaccination(res.data);
    }


    const logout = (event) => {
        localStorage.clear();
        window.location.href = '/login';
    }


    useEffect(() => {
        getConsultation();
        getVaccination();
        console.log(consulation);
        console.log(vaccination);
    }, [])



    const createConsultation = async (event) => {
        event.preventDefault();
        var res = await axios.post(process.env.REACT_APP_API_URL + '/api/v1/consultations?token=' + loggedInUser.token, {
            disease_history: $('#disease_history').val(),
            current_symptoms: $('#current_symptoms').val(),
        }).then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Create Consultation Successfully !',
                showConfirmButton: false,
                timer: 1500

            })

            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
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
                            <h1 className="display-4">Dashboard</h1>
                        </div>
                    </header>
                    {/* E: Header */}
                    <div className="container">
                        {/* S: Consultation Section */}
                        <section className="consultation-section mb-5">
                            <div className="section-header mb-3">
                                <h4 className="section-title text-muted">My Consultation</h4>
                            </div>
                            <div className="row">
                                {/* S: Link to Request Consultation */}

                                {/* E: Link to Request Consultation */}
                                {/* S: Society Consultation Box (Pending) */}


                                {
                                    consulation
                                        ?
                                        <div className="col-md-4">
                                            <div className="card card-default">
                                                <div className="card-header border-0">
                                                    <h5 className="mb-0">Consultation</h5>
                                                </div>
                                                <div className="card-body p-0">
                                                    <table className="table table-striped mb-0">
                                                        <tbody><tr>
                                                            <th>Status</th>
                                                            <td><span className="badge badge-info">{consulation.status}</span></td>
                                                        </tr>
                                                            <tr>
                                                                <th>Disease History</th>
                                                                <td className="text-muted">{consulation.disease_history}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Current Symptoms</th>
                                                                <td className="text-muted">{consulation.current_symptoms}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Doctor Name</th>
                                                                <td className="text-muted">{}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Doctor Notes</th>
                                                                <td className="text-muted">{consulation.doctor_notes}</td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                            </div>
                                        </div>
                                        :

                                        <div className="col-md-4">
                                            <div className="card card-default">
                                                <div className="card-header">
                                                    <h5 className="mb-0">Consultation</h5>
                                                </div>
                                                <div className="card-body">
                                                    <a href>+ Request consultation</a>
                                                </div>
                                            </div>
                                        </div>

                                }


                                {/* E: Society Consultation Box (Accepted) */}
                            </div>
                        </section>
                        {/* E: Consultation Section */}
                        {/* S: List Vaccination Section */}
                        <section className="consultation-section mb-5">
                            <div className="section-header mb-3">
                                <h4 className="section-title text-muted">My Vaccinations</h4>
                            </div>
                            <div className="section-body">
                                <div className="row mb-4">
                                    {/* S: First Vaccination info */}

                                    {
                                        vaccination === null ?
                                            <div className="col-md-12">
                                                <div className="alert alert-warning">
                                                    Your consultation must be approved by doctor to get the vaccine.
                                                </div>
                                            </div>
                                            : ''

                                    }


                                    {Object.keys(vaccination).map(function (key) {
                                        if (vaccination[key] !== null) {
                                            return (
                                                <div className="col-md-4">
                                                    <div className="card card-default">
                                                        <div className="card-header border-0">
                                                            <h5 className="mb-0">{key} Vaccination</h5>
                                                        </div>
                                                        <div className="card-body p-0">
                                                            <table className="table table-striped mb-0">
                                                                <tbody><tr>
                                                                    <th>Status</th>
                                                                    <td className="text-muted"><span className="badge badge-info">{vaccination[key].status}</span></td>
                                                                </tr>
                                                                    <tr>
                                                                        <th>Date</th>
                                                                        <td className="text-muted">{vaccination[key].date}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Spot</th>
                                                                        <td className="text-muted">{vaccination[key].spot.name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Vaccine</th>
                                                                        <td className="text-muted">{vaccination[key].vaccine !== null ? vaccination[key].vaccine.name : '-'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th>Vaccinator</th>
                                                                        <td className="text-muted">{vaccination[key].doctor !== null ? vaccination[key].doctor.name : '-'}</td>
                                                                    </tr>
                                                                </tbody></table>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        return (
                                            <div className="col-md-4">
                                                <div className="card card-default">
                                                    <div className="card-header border-0">
                                                        <h5 className="mb-0">{key} Vaccination</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <a href="/vaccinate">+ Register vaccination</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}



                                    {/* S: Second Vaccination Box (Done) */}
                                </div>
                            </div>
                        </section>
                        {/* E: List Vaccination Section */}
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

export default Dashboard;
