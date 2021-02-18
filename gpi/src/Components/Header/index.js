import React, { useContext } from 'react';
import { UserContext } from '../../Utils/UserContext';
import { Link, useRouteMatch } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown';
import './styles.css'

function Header({ setState, guestMode }) {
  const { setUser } = useContext(UserContext);
  function RenderLogout() {
    return(
      <div className="ml-auto d-block btn p-0 rounded">
        <Link 
          className="w-100 dropdown-item m-0 rounded-lg" 
          onClick={handleLogout} 
          to="/login"> 
        Logout
        </Link>
      </div>
    )
  }

  function RenderUser() {
    let {url} = useRouteMatch()
    return(
      <div className="ml-auto d-block btn  p-0 rounded rounded-bottom-lg">
        <Link 
          className="w-100 dropdown-item m-0 rounded-lg" 
          onClick={() => setState('/me')}
          to={`${url}/me`} >
        Perfil
        </Link>
      </div>
    )
  }

  function handleLogout() {
    localStorage.removeItem("ACCESS_TOKEN");
    setUser({});
  }
  
  return(
    <nav id="NavBar" className=" shadow w-100">
      <div className="row col-12 d-flex justify-content-end">
        <CustomDropdown state={setState} logout={RenderLogout()} userPage={RenderUser()} guestMode={guestMode}/>
      </div>
    </nav>
  )
}

export default Header;