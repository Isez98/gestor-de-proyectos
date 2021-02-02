import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'; 

const NavButton = ({toggle, setToggle}) => {

  const onClick = () => {
    toggle ? setToggle(false) : setToggle(true)
  }

  return(
    <div 
    className="text-center d-none d-md-inline text-white align-self-center mt-4"
    onClick={onClick}
    >
      <div id="collapseBtn" className="btn btn-secondary btn-block rounded-circle border-0">
        <span className="nav-link p-0 m-0">
          <FontAwesomeIcon id="arrowIcon" icon={ toggle ? faAngleRight : faAngleLeft}/>
        </span>            
      </div>          
    </div>
  )
};

export default NavButton;