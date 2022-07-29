import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { BrowserRouter as Router, useNavigate, Routes, Route } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    return <>
        {
            loggedInUser === null ? window.location.href='/login' : window.location.href='/dashboard'
        }
    </>
}

export default Home;
