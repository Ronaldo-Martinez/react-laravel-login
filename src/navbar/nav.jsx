import {Routes, Route, NavLink } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';
import '../App.css';

function Nav() {
  return (
    <div className="bg-img1 vh-100">
      <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center pt-2">
        <div className="w-100">
          <span className="navbar-brand"></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav justify-content-start">
              <li className="nav-item">
                <img className='px-5' src="/img/logo.svg" alt="" />
              </li>
            </ul>
            <div className='w-100 justify-content-center'>
              <div className='h-divider'></div>
            </div>
            <div className='w-100 justify-content-end'>
            <ul className="navbar-nav w-100 justify-content-start bg-nav-c">
              <li className="nav-item p-2">
                <NavLink 
                  className={({ isActive }) => (isActive ? 'p-2 nav-link text-white' : 'nav-link p-2')}
                  aria-current="page" 
                  to="/"
                  >Home</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink 
                  className={({ isActive }) => (isActive ? 'p-2 nav-link text-white' : 'nav-link p-2')} 
                  aria-current="page" 
                  to="/"
                  >Destinos</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink className={({ isActive }) => (isActive ? 'p-2 nav-link text-white' : 'nav-link p-2')} 
                aria-current="page" 
                to="/"
                >Tripulacion</NavLink>
              </li>
              <li className="nav-item  p-2">
                <NavLink className="nav-link active" aria-current="page" to="/">Tecnología</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink className={({ isActive }) => (isActive ? 'p-2 nav-link text-white' : 'nav-link p-2')} 
                to="/login"
                >Login</NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink className={({ isActive }) => (isActive ? 'p-2 nav-link text-white' : 'nav-link p-2')} 
                to="/register" 
                activeClassName="text-white"
                >Register</NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/login' element={<Login></Login>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Nav;
