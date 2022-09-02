import {Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/authUser';

function Nav() {
    const {token, logout}=AuthUser();
    const logoutUser = ()=>{
        if(token !== undefined){
            logout();
        }
    }
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
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>} ></Route>
        </Routes>
      </div>
    </>
  );
}

export default Nav;
