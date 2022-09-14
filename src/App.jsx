import './App.css';
import AuthUser from './views/authUser';
import Nav from './navbar/nav';
import Auth from './navbar/Auth'

function App() {
  const {getToken}=AuthUser();
  if(!getToken()){
    return <Nav/>
  }
  return (
    <Auth/>
  );
}

export default App;
