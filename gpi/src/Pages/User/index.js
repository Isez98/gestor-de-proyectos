import React from 'react';
import image from '../../Assets/img/tecnm-1.png'

const UserPage = ({userData}) => {
  let message = `This is ${userData || "User"}'s page`
  return(
    <div class="container-fluid text-left">
      <h3 class="text-dark mb-4">Perfil</h3>
      <div class="row mb-3">
        <div class="col-lg-4">
          <div class="card mb-3">
            <div class="card-body text-center shadow">
              <img class="rounded-circle mb-3 mt-4" src={image} width="160" height="160" alt="user profile"/>
              <div class="mb-3">
                <button class="btn btn-primary text-capitalize font-weight-bold" type="button">Cambiar Foto de Perfil</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col">
              <div class="card shadow mb-3">
                <form class="needs-validation" noValidate>
                  <div class="card-header py-3">
                    <p class="text-primary m-0 font-weight-bold">Configuracion de Usuario</p>
                  </div>
                  <div class="card-body">
                    <div class="form-row">
                      <div class="col">
                        <div class="form-group">
                          <label for="username"><strong>Nombre de Usuario</strong></label>
                          <input required='true' id="userName" class="form-control" type="text" placeholder="Nombre de Usuario" name="username"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="email"><strong>Correo Electronico</strong></label>
                          <input required='true' id="email" class="form-control" type="email" placeholder="Correo Electronico" name="email"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col">
                        <div class="form-group">
                          <label for="first_name"><strong>Nombre(s)</strong></label>
                          <input required='true' id="firstName" class="form-control" type="text" placeholder="Nombre(s)" name="first_name"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="last_name"><strong>Apellido(s)</strong></label>
                          <input required='true' id="lastName" class="form-control" type="text" placeholder="Apellido(s)" name="last_name"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="col">
                        <div class="form-group">
                          <label for="first_name"><strong>Contraseña</strong></label>
                          <input required='true' id="password" class="form-control" type="password" placeholder="Contraseña" name="first_name"/>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label for="last_name"><strong>Repetir Contraseña</strong></label>
                          <input required='true' id="repeatPassword" class="form-control" type="password" placeholder="Repetir Contraseña" name="last_name"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="address"><strong>Academia</strong></label>
                      <input required='true' id="academy" class="form-control" type="text" placeholder="Academia" name="address"/>
                    </div>
                    <div class="form-row">
                      <div class="col">
                        <div class="form-group">
                          <label for="city"><strong>Numero de Empleado</strong></label>
                          <input required='true' id="employeeNumber" class="form-control" type="text" placeholder="Numero de Empleado" name="city"/>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <button id="profileBtn" class="btn btn-primary text-capitalize font-weight-bold" type="submit">Guardar Configuracion</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card shadow mb-5"></div>
    </div>
  );
}

export default UserPage;