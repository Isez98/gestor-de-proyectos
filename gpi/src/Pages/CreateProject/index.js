import React from 'react';
import './styles.css';

const CreateProject = () =>{
  return(
    <div id="create-container" className="w-100 text-left">
      <div className="container-fluid"></div>
      <div className="d-sm-flex justify-content-between align-items-center">
        <h3 className="text-dark mb-0">Gestor de Proyectos</h3>
      </div>
      <div className="row"/>
      <form className="needs-validation" novalidate>
        <div className="col-xl-12 offset-xl-0">
          <div className="card shadow mb-3">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Datos del proyecto</p>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="username"><strong>Nombre del proyecto</strong></label>
                      <input required='true' id="proyectName" className="form-control" type="text" placeholder="Nombre del proyecto" name="nombre.proyecto"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="email"><strong>Fecha de liberacion</strong></label>
                      <input required='true' id="releaseDate" className="border rounded form-control" type="date" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}/>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Periodo de Inicio</strong></label><input required='true' id="startDate" className="border rounded form-control" type="date" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="last_name"><strong>Periodo de conclusion</strong></label><input required='true' id="conclusionDate" className="border rounded form-control" type="date" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}/>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Tipo de proyecto</strong></label>
                      <select id="typeProyect" className="border rounded form-control" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}>
                        <optgroup label="Tipo de proyecto">
                          <option value="Desarrollo de software" selected="">Desarrollo de software</option>
                          <option value="Paquete tecnologico">Paquete tecnologico</option>
                          <option value="Servicio tecnologico">Servicio tecnologico</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Objetivo del proyecto</strong></label>
                      <select id="objectiveProject" className="border rounded form-control" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}>
                        <optgroup label="Objetivo del proyecto">
                          <option value="Integrador" selected="">Integrador</option>
                          <option value="Titulacion">Titulacion</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="last_name"><strong>Estatus del proyecto</strong><br/></label>
                      <select id="statusProject" className="border rounded form-control" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}>
                        <optgroup label="Estatus del proyecto">
                          <option value="Cancelado" selected="">Cancelado</option>
                          <option value="En desarrollo">En desarrollo</option>
                          <option value="Finalizado">Finalizado</option>
                          <option value="Implementado">Implementado</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col">
                      <div className="form-group">
                        <label for="city"><strong>Comentarios u Observaciones</strong></label>
                        <textarea required='true' id="projectComment" className="border rounded form-control" style={{padding: "6px 12px", color: "rgb(110, 112, 126)", height: "100px"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card shadow mb-3">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Datos de la empresa</p>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="username"><strong>Nombre de la empresa</strong></label>
                      <input required='true' id="enterpriseProject" className="form-control" type="text" placeholder="Nombre de la empresa" name="username"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="email"><strong>Correo electronico de la empresa</strong><br/></label>
                      <input required='true' id="enterpriseContact" className="form-control" type="email" placeholder="ejemplo@ejemplo.com" name="email"/>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Nombre(s)</strong></label>
                      <input required='true' id="firstNameContact" className="form-control" type="text" placeholder="Juan" name="first_name"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="last_name"><strong>Apellido(s)</strong></label>
                      <input required='true' id="lastNameContact" className="form-control" type="text" placeholder="Perez" name="last_name"/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
                  {
                    //<!-- Add in studentform section  -->
                  }
          <div className="card shadow">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Datos de los alumnos participantes</p>
            </div>
            <div className="card-body">
              <div className="dynamic-wrap-student">
              {
                // Add student component here
              }
              </div>
            </div>
          </div>
                  { 
                    //<!-- Add in teacher form section -->
                  }
          <div className="card shadow">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Datos de los maestros participantes</p>
            </div>
            <div className="card-body">
              <div className="dynamic-wrap-teacher">
                {
                  // Add Teacher component here
                }
              </div>
            </div>
          </div>
          <div className="form-group">
            <button id="proyectBtn" className="btn btn-primary" type="submit">Guardar datos</button>
            <button onClick={() => {alert("This is an alert!")}} id="deleteBtn" className="btn btn-danger" type="button">Eliminar Proyecto</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default CreateProject;