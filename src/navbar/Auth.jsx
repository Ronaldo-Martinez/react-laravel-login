import {Routes, Route, Link } from 'react-router-dom';
import { useState } from "react"
import Home from '../views/public/home';
import Dashboard from '../views/dashboard';
import AuthUser from '../views/authUser';
import '../App.css';

function Nav() {
    const {token, logout}=AuthUser();
    const logoutUser = ()=>{
        if(token !== undefined){
            logout();
        }
    }

    const [data, setData] = useState("")
  return (
    <div className={data}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand"></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={logoutUser}>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home setData={setData}/>}></Route>
          <Route path='/dashboard' element={<Dashboard setData={setData}></Dashboard>} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Nav;
