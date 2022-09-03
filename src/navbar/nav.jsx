import {Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';

function Nav() {
  return (
    <>
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
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
    </>
  );
}

export default Nav;
