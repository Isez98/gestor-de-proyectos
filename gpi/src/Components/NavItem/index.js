import React, { useContext } from 'react';
import { SizeContext } from '../../Utils/SizeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const { size } = useContext(SizeContext);
  const styleSelected = "nav-link active font-weight-bold"
  const styleUnSelected = "nav-link"
  const reducedNav = "d-flex flex-column justify-content-center align-items-center ";
  
  return(
    <li className="nav-item mt-2 " role="presentation">
      <Link 
      id={props.id} 
      className={ (size ? reducedNav: "") + (props.state === props.id ? styleSelected : styleUnSelected)} 
      to={`${props.url}`} 
      onClick={() => props.setState(props.id)}
      >
      {
        props.icon ? <FontAwesomeIcon className={ size ? "text-align-center" : "" } icon={props.icon}/> : null
      }
        <span className={ size ? "h6" :"pl-2 h5"}>{props.title}</span>
      </Link>
      {props.children}
    </li>
  )
};

export default NavItem;