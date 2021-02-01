import React from 'react';
import { Link } from 'react-router-dom';
import TecLogo from '../../Assets/img/tecnm-1.png';
import '../Login/styles.css';

function Register(){
  return(
    <div className="container">
      <div className="card shadow-lg o-hidden border-0 my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-flex">
              <img id="iconLogo" src={TecLogo} alt=""/>
            </div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Registro</h4>
                  </div>
                  <form className="needs-validation" novalidate>
                    <div className="form-group">
                      <input 
                        required='true' 
                        className="form-control form-control-user rounded-pill" 
                        type="text" id="userName" 
                        aria-describedby="emailHelp" 
                        placeholder="Nombre de usuario" 
                        name="email" />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input 
                          required='true' 
                          className="form-control form-control-user rounded-pill" 
                          type="text" 
                          id="firstName" 
                          placeholder="Nombre(s)" 
                          name="first_name" />
                        </div>
                        <div className="col-sm-6">
                          <input 
                            required='true' 
                            className="form-control form-control-user rounded-pill" 
                            type="text" 
                            id="lastName" 
                            placeholder="Apellido(s)" 
                            name="last_name" />
                        </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input 
                          required='true' 
                          className="form-control form-control-user rounded-pill" 
                          type="text" id="academy" 
                          placeholder="Academia" 
                          name="first_name" />
                      </div>
                      <div className="col-sm-6">
                        <input 
                          required='true' 
                          className="form-control form-control-user rounded-pill" 
                          type="text" 
                          id="employeeNumber" 
                          placeholder="Numero de empleado" 
                          name="last_name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input 
                        required='true' 
                        className="form-control form-control-user rounded-pill" 
                        type="email" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Correo Electronico" 
                        name="email" />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input 
                          required='true' 
                          className="form-control form-control-user rounded-pill" 
                          type="password" 
                          id="password" 
                          placeholder="Contraseña" 
                          name="password" />
                      </div>
                      <div className="col-sm-6">
                        <input 
                          required='true' 
                          className="form-control form-control-user rounded-pill" 
                          type="password" 
                          id="repeatPassword" 
                          placeholder="Repetir Contraseña" 
                          name="password_repeat" />
                      </div>
                    </div>
                    <input 
                      required='true' 
                      className="form-control form-control-user rounded-pill" 
                      type="text" 
                      id="securityCode" 
                      aria-describedby="emailHelp" 
                      placeholder="Codigo de seguridad" 
                      name="email" />
                    <hr/>
                    <button 
                      className="btn btn-primary btn-block text-white btn-user rounded-pill py-2" 
                      id="registerBtn" 
                      type="submit">Registrar cuenta
                    </button>
                  </form>
                  <div className="text-center"></div>
                  <br/>
                  <div className="text-center">
                    <div>
                      <Link className="small" to="/forgot">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div>
                      <Link className="small" to="/">¿Ya tienes una cuenta? Inicia sesion!</Link>
                    </div>                    
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Register;