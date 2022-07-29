import React, { Component } from 'react';
import { BrowserRouter, Switch, Routes, Route }
  from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


import Dashboard from './pages/Dashboard';
import Vaccinate from './pages/Vaccinate';
import VaccinateDetails from './pages/VaccinateDetails';
import CreateConsult from './pages/CreateConsult';
import Authenticated from './middleware/Authenticated';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/CreateConsult' element={<CreateConsult />} />
          <Route path='/vaccinate' element={<Vaccinate />} />
          <Route path='/vaccinate/:identifier' element={<VaccinateDetails />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>

    );
  }
}

export default App;
