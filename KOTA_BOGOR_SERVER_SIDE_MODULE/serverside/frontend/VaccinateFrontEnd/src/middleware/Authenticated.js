import React,{useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { BrowserRouter as Router,useNavigate, Routes, Route } from 'react-router-dom';

import {authenticated} from '../store'

const Authenticated = (props) => {
        const navigate = useNavigate()
        const auth = useRecoilValue(authenticated)
        useEffect(() => {
                if (!auth.check) {
                    navigate('/login')
                }
        }, []);


        return props.children



}

export default Authenticated;
