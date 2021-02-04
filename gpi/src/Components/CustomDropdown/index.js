import React, { useContext } from 'react';
import { UserContext } from '../../Utils/UserContext';
import Dropdown from 'react-bootstrap/Dropdown';
import TecLogo from '../../Assets/img/tecnm-1.png'
import './styles.css'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <span 
    unselectable="on"
    id="dropdown-custom"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </span>
));

const CustomDropdown = ({logout, userPage, data}) => {
  const { user } = useContext(UserContext);
  let userFullName = null;

  if(user){
    userFullName = `${user.firstName} ${user.lastName}`;
  } 

  return(
  <>
    <Dropdown className="bg-transparent">
      <Dropdown.Toggle as={CustomToggle}>
        <span className="d-none d-lg-inline text-gray-600 small">{ userFullName || "Invitado"}</span>
        <img className="border rounded-circle img-profile ml-3" id="usrImg" src={TecLogo} alt="Tec"/>
      </Dropdown.Toggle>
      <Dropdown.Menu className="mt-2 rounded">
        <Dropdown.Item className="p-0" eventKey="1">{userPage}</Dropdown.Item>
        <Dropdown.Item className="p-0" eventKey="2">{logout}</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>{''}
  </>
  )
}

export default CustomDropdown;