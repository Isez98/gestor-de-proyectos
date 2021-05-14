import React, { useContext } from 'react';
import { SizeContext } from '../../Utils/SizeContext';
import TecLogo from '../../Assets/img/tecnm-1.png';
import './styles.css';
import NavItem from '../NavItem';
import NavButton from '../NavButton';
import { Link, useRouteMatch } from 'react-router-dom';
import { faTachometerAlt, faUser, faTable, faEdit } from '@fortawesome/free-solid-svg-icons'; 

const NavBar = ({ state, setState, guestMode }) => {
  let { url } = useRouteMatch(); 
  const { size } = useContext(SizeContext);

  const onClickLogo = () => {
    setState('/statistics');
  }

  const fullWidth = {width: "15em", minHeight: '100%', height: '100%'};
  const reduced = {width: "7em", minHeight: '100%', height: '100%'};

  return(
    <nav 
    id="NavBar"
    className={"navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary mt-1"}
    style={(size ? reduced : fullWidth)}
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
         { size ? null : <div className="sidebar-brand-text mx-3 font-weight-bold"><span>GPI</span></div> }
        </Link>
        <hr className="sidebar-divider my-0"/>
        <ul className="nav navbar-nav text-light text-left pl-0 mt-3 justify-content-start">
          <NavItem state={state} setState={setState} id="/statistics" url={`${url}/statistics`} icon={faTachometerAlt} title="Estadisticas"/>
          <NavItem state={state} setState={setState} guestMode={guestMode} id="/me" url={`${url}/me`} icon={faUser} title="Perfil"/>
          <NavItem state={state} setState={setState} id="/projects" url={`${url}/projects`} icon={faTable} title="Proyectos"/>
          <NavItem state={state} setState={setState} guestMode={guestMode} id="/create" url={`${url}/create`} icon={faEdit} title="Gestor de Proyectos"/>
          <NavItem state={state} setState={setState} guestMode={guestMode} id="/chat" url={`${url}/chat`} icon={faEdit} title="Chat"/>
        </ul>
        <NavButton/>
      </div>
    </nav>
  )
};

export default NavBar;