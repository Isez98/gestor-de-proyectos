import React from 'react';
import TecLogo from '../../Assets/img/tecnm-1.png';
import './styles.css';
import { Link, useRouteMatch } from 'react-router-dom';

const NavBar = () => {
  let { url } = useRouteMatch();
  return(
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
      <div className="container-fluid d-flex flex-column p-0">
        <Link className="navbar-brand text-justify d-flex justify-content-center align-items-center sidebar-brand m-0" to={`${url}/statistics`}>
          <div className="sidebar-brand-icon rotate-n-0">
           <img id="iconSup" src={TecLogo} alt=""/>            
          </div>
          <div className="sidebar-brand-text mx-3"><span>GPI</span></div>
        </Link>
        <hr className="sidebar-divider my-0"/>
        <ul className="nav navbar-nav text-light" id="accordionSidebar">
          <li id="statBtn" className="nav-item" role="presentation">
            <Link className="nav-link active" to={`${url}/statistics`}>
              <i className="fas fa-tachometer-alt"/>
              <span>Estadisticas</span>
            </Link>
          </li>
          <li id="profileBtn" className="nav-item" role="presentation">
            <Link className="nav-link" to={`${url}/me`}>
              <i className="fas fa-user"/>
              <span>Perfil</span>
            </Link>
          </li>
          <li id="projectBtn" className="nav-item" role="presentation">
            <Link className="nav-link" to={`${url}/projects`}>
              <i className="fas fa-table"/>
              <span>Proyectos</span>
            </Link>
          </li>
          <li id="createBtn" className="nav-item" role="presentation">
            <Link className="nav-link" to={`${url}/create`}>
              <i className="far fa-edit"/>
              <span>Gestor de Proyectos</span>
            </Link>
          </li>
          <li className="nav-item" role="presentation"></li>
        </ul>
        <div className="text-center d-none d-md-inline">
          <button className="btn rounded-circle border-0" id="sidebarToggle" type="button"/>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;