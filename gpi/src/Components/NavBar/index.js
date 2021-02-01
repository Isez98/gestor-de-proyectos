import React, { useState } from 'react';
import TecLogo from '../../Assets/img/tecnm-1.png';
import './styles.css';
import NavItem from '../NavItem'
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faTable, faEdit, faAngleLeft  } from '@fortawesome/free-solid-svg-icons'; 


const NavBar = () => {
  let { url } = useRouteMatch(); 
  const [state, setState] = useState('statsNavItem')
  return(
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 mt-1">
      <div className="container-fluid d-flex flex-column p-0">
        <Link className="navbar-brand text-justify d-flex justify-content-center align-items-center sidebar-brand m-0" to={`${url}/statistics`}>
          <div className="sidebar-brand-icon rotate-n-0">
           <img id="iconSup" src={TecLogo} alt=""/>            
          </div>
          <div className="sidebar-brand-text mx-3"><span>GPI</span></div>
        </Link>
        <hr className="sidebar-divider my-0"/>
        <ul className="nav navbar-nav text-light text-left pl-3" id="accordionSidebar">
          <NavItem state={state} setState={setState} id="statsNavItem" url={`${url}/statistics`} icon={faTachometerAlt} title="Estadisticas"/>
          <NavItem state={state} setState={setState} id="profileNavItem" url={`${url}/me`} icon={faUser} title="Perfil"/>
          <NavItem state={state} setState={setState} id="projectsNavItem" url={`${url}/projects`} icon={faTable} title="Proyectos"/>
          <NavItem state={state} setState={setState} id="createItemNav" url={`${url}/create`} icon={faEdit} title="Gestor de Proyectos"/>
        </ul>
        <div className="text-center d-none d-md-inline text-white">
          <div id="collapseBtn" className="btn btn-secondary btn-block rounded-circle border-0">
            <span className="nav-link p-0 m-0">
              <FontAwesomeIcon id="arrowIcon" icon={faAngleLeft}/>
            </span>            
          </div>          
        </div>
      </div>
    </nav>
  )
};

export default NavBar;