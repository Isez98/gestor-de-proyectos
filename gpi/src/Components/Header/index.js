import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown';


function Header({ setState, data }) {
  function RenderLogout() {
    return(
      <div className="ml-auto">
        <Link 
          className="btn w-100" 
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
      <div className="ml-auto">
        <Link 
          className="btn w-100" 
          onClick={() => setState('/me')}
          to={`${url}/me`} >
        Perfil
        </Link>
      </div>
    )
  }

  function handleLogout() {
    localStorage.removeItem("ACCESS_TOKEN");
  }
  
  return(
    <nav className="navbar navbar-dark mt-0 mb-3 shadow w-100">
      <div className="row col-12 d-flex justify-content-end">
        <CustomDropdown data={data} logout={RenderLogout()} userPage={RenderUser()}/>
      </div>
    </nav>
  )
}

export default Header;