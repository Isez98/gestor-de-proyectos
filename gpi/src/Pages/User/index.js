import React, { useContext, useState } from 'react';
import { UserContext } from '../../Utils/UserContext';
import image from '../../Assets/img/tecnm-1.png';

const UserPage = (props) => {
  // get the setUser from UserContext
  const { user } = useContext(UserContext);
  const [ userData, setUserData] = useState(user);

  const handleChange = e => {
    const {id, value} = e.target
    setUserData(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  //  Set as async once using the API
  const handleSubmit = () => {
    console.log(userData)
  //  set the value of context with the value of the updated DB user info
    //const value = await apis.getUserByEmail(payload)
    //setUser(value); 
  }

  return(
    <div className="container-fluid text-left">
      <h3 className="text-dark mb-4">Perfil</h3>
      <div className="row mb-3">
        <div className="col-lg-4">
          <div className="card mb-3">
            <div className="card-body text-center shadow">
              <img className="rounded-circle mb-3 mt-4" src={image} width="160" height="160" alt="user profile"/>
              <div className="mb-3">
                <button className="btn btn-primary text-capitalize font-weight-bold" type="button">Cambiar Foto de Perfil</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col">
              <div className="card shadow mb-3">
                <form className="needs-validation" noValidate>
                  <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">Configuracion de Usuario</p>
                  </div>
                  <div className="card-body">
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="username"><strong>Nombre de Usuario</strong></label>
                          <input 
                            required={true} 
                            value={userData.userName}
                            id="userName" 
                            onChange={handleChange}
                            className="form-control" 
                            type="text" 
                            placeholder="Nombre de Usuario" 
                            name="username"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="email"><strong>Correo Electronico</strong></label>
                          <input 
                            required={true} 
                            value={userData.email}
                            id="email" 
                            onChange={handleChange}
                            className="form-control" 
                            type="email" 
                            placeholder="Correo Electronico" 
                            name="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="first_name"><strong>Nombre(s)</strong></label>
                          <input 
                            required={true} 
                            value={userData.firstName}
                            id="firstName" 
                            onChange={handleChange}
                            className="form-control" 
                            type="text" 
                            placeholder="Nombre(s)" 
                            name="first_name"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="last_name"><strong>Apellido(s)</strong></label>
                          <input 
                            required={true} 
                            value={userData.lastName}
                            id="lastName" 
                            onChange={handleChange}
                            className="form-control" 
                            type="text" 
                            placeholder="Apellido(s)" 
                            name="last_name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="address"><strong>Academia</strong></label>
                      <input 
                        required={true} 
                        value={userData.academy}
                        id="academy" 
                        onChange={handleChange}
                        className="form-control" 
                        type="text" 
                        placeholder="Academia" 
                        name="address"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="city"><strong>Numero de Empleado</strong></label>
                          <input 
                            required={true} 
                            value={userData.employeeNumber}
                            id="employeeNumber" 
                            onChange={handleChange}
                            className="form-control" 
                            type="text" 
                            placeholder="Numero de Empleado" 
                            name="city"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button id="profileBtn" className="btn btn-primary text-capitalize font-weight-bold" type="button" onClick={handleSubmit}>Guardar Configuracion</button>
                      <button className="btn text-capitalize btn-purple font-weight-bold">Cambiar contraseña</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow mb-5"></div>
    </div>
  );
}

export default UserPage;