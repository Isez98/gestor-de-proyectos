import React, { useState } from 'react';
import TecLogo from '../../Assets/img/tecnm-1.png';
import './styles.css';
import NavItem from '../NavItem';
import NavButton from '../NavButton';
import { Link, useRouteMatch } from 'react-router-dom';
import { faTachometerAlt, faUser, faTable, faEdit } from '@fortawesome/free-solid-svg-icons'; 

const NavBar = ({ state, setState }) => {
  let { url } = useRouteMatch(); 
  const [barWidth, setBarWidth] = useState(false);

  const onClickLogo = () => {
    setState('/statistics');
  }

  const fullWidth = {width: "15em"};
  const reduced = {width: "7em"};

  return(
    <nav 
    className={"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary mt-1 "}
    style={(barWidth ? reduced : fullWidth)}
    >
      <div className="container-fluid d-flex flex-column p-0">
        <Link 
        className="navbar-brand text-justify d-flex justify-content-center align-items-center sidebar-brand m-0" 
        to={`${url}/statistics`}
        onClick={onClickLogo}
        >
          <div className="sidebar-brand-icon rotate-n-0">
           <img id="iconSup" src={TecLogo} alt=""/>            
          </div>
         { barWidth ? null : <div className="sidebar-brand-text mx-3 font-weight-bold"><span>GPI</span></div> }
        </Link>
        <hr className="sidebar-divider my-0"/>
        <ul className="nav navbar-nav text-light text-left pl-0 mt-3 justify-content-start">
          <NavItem size={barWidth} state={state} setState={setState} id="/statistics" url={`${url}/statistics`} icon={faTachometerAlt} title="Estadisticas"/>
          <NavItem size={barWidth} state={state} setState={setState} id="/me" url={`${url}/me`} icon={faUser} title="Perfil"/>
          <NavItem size={barWidth} state={state} setState={setState} id="/projects" url={`${url}/projects`} icon={faTable} title="Proyectos"/>
          <NavItem size={barWidth} state={state} setState={setState} id="/create" url={`${url}/create`} icon={faEdit} title="Gestor de Proyectos"/>
        </ul>
        <NavButton toggle={barWidth} setToggle={setBarWidth}/>
      </div>
    </nav>
  )
};

export default NavBar;