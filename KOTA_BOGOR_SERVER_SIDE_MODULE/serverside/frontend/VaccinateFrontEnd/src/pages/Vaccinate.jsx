import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import $ from 'jquery';
import axios from 'axios';
import Swal from 'sweetalert2';

const Vaccinate = () => {
    const [spots, setSpots] = useState([]);



    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const logout = (event) => {
        localStorage.clear();
        window.location.href = '/login';
    }

    const getSpots = async (event) => {
        var res = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/spots?token=' + loggedInUser.token)
        console.log(res.data);
        setSpots(res.data.spots);
    }


    useEffect(() => {
        getSpots();
    }, [])




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
                            <h1 className="display-4">First Vaccination</h1>
                        </div>
                    </header>
                    {/* E: Header */}
                    <div className="container mb-5">
                        <div className="section-header mb-4">
                            <h4 className="section-title text-muted font-weight-normal">List Vaccination Spots in Central Jakarta</h4>
                        </div>
                        <div className="section-body">
                            

                            {

                                spots.map(spot => {
                                    return (
                                        <article className="spot">
                                        <div className="row">
                                            <div className="col-5">
                                                <h5 className="text-primary"><a href={`/vaccinate/${spot.id}`}>{spot.name}</a></h5>
                                                <span className="text-muted">{spot.address}</span>
                                            </div>
                                            <div className="col-4">
                                                <h5>Available vaccines</h5>
                                                <span className="text-muted">{
                                                        Object.keys(spot.available_vaccines).map((element) => (
                                                            <span>{element} , </span>   
                                                        ))

                                                }</span>
                                            </div>
                                            <div className="col-3">
                                                <h5>Serve</h5>
                                                <span className="text-muted">
                                                    Only 
                                                    {
                                                        spot.serve == 1 ? ' first ' : ' second '
                                                    }
                                                     vaccination
                                                </span>
                                            </div>
                                        </div>
                                    </article>
        
                                    )
                                })
                            }




                            {/* <article className="spot unavailable">
                                <div className="row">
                                    <div className="col-5">
                                        <h5 className="text-primary">Nasyidah Hospital</h5>
                                        <span className="text-muted">Ki. Bakau Griya Utama No. 476, DKI Jakarta</span>
                                    </div>
                                    <div className="col-4">
                                        <h5>Available vaccines</h5>
                                        <span className="text-muted">Sinovac, AstraZeneca, Moderna, Pfizer.</span>
                                    </div>
                                    <div className="col-3">
                                        <h5>Serve</h5>
                                        <span className="text-muted">
                                            Only second vaccination
                                        </span>
                                    </div>
                                </div>
                            </article>
                         */}
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
                {/* E: Footer */}
            </div>

        </div>
    );
}

export default Vaccinate;
