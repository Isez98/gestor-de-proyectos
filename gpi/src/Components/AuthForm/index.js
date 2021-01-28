import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import apis from '../../API'

const AuthForm = (props) => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleClick = e => {
    const { id, value} = e.target;
    setState(prevState => ({
      ...prevState,
      [id] : value
    }))
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    const payload = {
      "email": state.email,
      "password": state.password
    }
    apis.login(payload)
  }

  return(
    <div className="col-lg-4">
      <div className="p-5">
          <div className="text-center">
              <h4 className="text-dark mb-4">¡Bienvenido!</h4>
          </div>
          <form className="user">
              <div className="form-group">
                <input 
                  className="form-control form-control-user rounded-pill py-2" 
                  type="email" 
                  id="email" 
                  aria-describedby="emailHelp" 
                  placeholder="Correo electronico..." 
                  name="email" 
                  value={state.email}
                  onChange={handleClick}
                />
              </div>
              <div className="form-group">
                <input 
                  className="form-control form-control-user rounded-pill py-2" 
                  type="password" 
                  id="password" 
                  placeholder="Contraseña..." 
                  name="password"
                  value={state.password}
                  onChange={handleClick}
                />
              </div>
              <div className="form-group">
                  <div className="custom-control custom-checkbox small">
                      <div className="form-check">
                        <input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1"/>
                        <label className="form-check-label custom-control-label" htmlFor="formCheck-1">Recordar sesion</label>
                      </div>
                  </div>
              </div>
              <button 
                id="login" 
                className="btn btn-primary btn-block text-white btn-user rounded-pill py-2" 
                onClick={handleSubmitClick}>Entrar
              </button>
              <hr/>
          </form>
          <div className="text-center"><Link className="small" to="/forgot">¿Olvidaste tu contraseña?</Link></div>
          <div className="text-center"><Link className="small" to="/register">Crear una cuenta</Link></div>
      </div>
    </div>
    
  )
}

export default AuthForm;