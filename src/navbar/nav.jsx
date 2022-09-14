import {Routes, Route, NavLink } from 'react-router-dom';
import { useState } from "react"
import Home from '../views/public/home';
import Login from '../views/login';
import Register from '../views/register';
import Destinos from '../views/public/destinos';
import Tecnologia from '../views/public/tecnologia';
import Tripulacion from '../views/public/tripulacion';
import '../App.css';

function Nav() {
  const [data, setData] = useState("bg-home vh-100")
  
  return (
    <div className={data}>
      <nav className="navbar navbar-expand-md navbar-dark pt-4">
        <div className="container-fluid g-0">
          <span className="navbar-brand">
            <img className='px-5' src="/img/logo.svg" alt="" />
          </span>
          <button className="navbar-toggler mx-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse w-100 justify-content-end" id="navbarTogglerDemo02">
            <div className='w-100 justify-content-start'>
              <div className='h-divider'></div>
            </div>
            <ul className="navbar-nav bg-nav-c px-4">
              <li className="nav-item p-3">
                <NavLink 
                  className={({ isActive }) => (isActive ? 'p-2 nav-link text-white border-bottom' : 'nav-link p-2')}
                  aria-current="page" 
                  to="/"
                >Home</NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink 
                  className={({ isActive }) => (isActive ? 'p-2 nav-link text-white border-bottom' : 'nav-link p-2')} 
                  aria-current="page" 
                  to="/destinos"
                  >Destinos</NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className={({ isActive }) => (isActive ? 'p-2 nav-link text-white border-bottom' : 'nav-link p-2')} 
                aria-current="page" 
                to="/tripulacion"
                >Tripulacion</NavLink>
              </li>
              <li className="nav-item  p-3">
                <NavLink
                  className={({ isActive }) => (isActive ? 'p-2 nav-link text-white border-bottom' : 'nav-link p-2')} 
                  aria-current="page" to="/tecnologia">Tecnología</NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className={({ isActive }) => (isActive ? 'p-2 nav-link text-white border-bottom' : 'nav-link p-2')} 
                to="/login"
                >Login</NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className={({ isActive }) => (isActive ? 'p-2 nav-link text-white border-bottom' : 'nav-link p-2')} 
                to="/register" 
                >Register</NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home setData={setData}/>} ></Route>
          <Route path='/destinos' element={<Destinos setData={setData}/>} ></Route>
          <Route path='/tripulacion' element={<Tripulacion setData={setData}/>} ></Route>
          <Route path='/tecnologia' element={<Tecnologia setData={setData}/>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Nav;
