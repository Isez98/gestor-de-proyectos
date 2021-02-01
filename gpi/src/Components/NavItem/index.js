import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const styleSelected = "nav-link active"
  const styleUnSelected = "nav-link"
  
  return(
    <li className="nav-item" role="presentation">
      <Link 
      id={props.id} 
      className={props.state === props.id ? styleSelected : styleUnSelected} 
      to={`${props.url}/statistics`} 
      onClick={() => props.setState(props.id)}
      >
        <FontAwesomeIcon icon={props.icon}/>
        <span className="pl-2">{props.title}</span>
      </Link>
    </li>
  )
};

export default NavItem;