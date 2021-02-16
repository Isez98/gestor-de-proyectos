import React, {useState} from 'react';
import './styles.css';
import AddStudent from '../../Components/AddStudent';
import AddTeacher from '../../Components/AddTeacher';

const CreateProject = () =>{
  const [dataObject, setDataObject] = useState({
    proyectName: "",
    releaseDate: "",
    startDate: "",
    conclusionDate: "",
    typeProyect: "",
    objectiveProject: "",
    statusProject: "",
    projectComment: "",
    enterpriseProject: "",
    enterpriseContact: "",
    firstNameContact: "",
    lastNameContact: "",
    studentsInfo: [],
    teachersInfo: []
  })
  const [addStudent, setAddStudent] = useState([]);
  const [addTeacher, setAddTeacher] = useState([]);

  const handleType = e => {
    const {id, value} = e.target;
    setDataObject(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  function handleStudents(key){
    setAddStudent(prevState => [...prevState, key]);
  }

  function deleteStudent(key){
    setAddStudent(addStudent.filter((item) => (item !== key)));
  }

  function handleTeachers(key){
    setAddTeacher(prevState => [...prevState, key]);
  }

  function deleteTeacher(key){
    setAddTeacher(addTeacher.filter((item) => (item !== key)));
  }

  return(
    <div id="create-container" className="w-100 text-left">
      <div className="container-fluid"></div>
      <div className="d-sm-flex justify-content-between align-items-center">
        <h3 className="text-dark mb-0">Gestor de Proyectos</h3>
      </div>
      <div className="row"/>
      <form className="needs-validation" noValidate>
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
                      <label htmlFor="username"><strong>Nombre del proyecto</strong></label>
                      <input 
                        id="proyectName" 
                        value={dataObject.proyectName}
                        onChange={handleType}
                        required='true' 
                        className="form-control" 
                        type="text" 
                        placeholder="Nombre del proyecto" 
                        name="nombre.proyecto"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="email"><strong>Fecha de liberacion</strong></label>
                      <input 
                        id="releaseDate"
                        value={dataObject.releaseDate}
                        onChange={handleType}
                        required='true'
                        className="border rounded form-control" 
                        type="date" 
                        style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Periodo de Inicio</strong></label>
                      <input 
                        id="startDate"
                        value={dataObject.startDate}
                        onChange={handleType}
                        required='true'
                        className="border rounded form-control" 
                        type="date" 
                        style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="last_name"><strong>Periodo de conclusion</strong></label>
                      <input 
                        id="conclusionDate" 
                        value={dataObject.conclusionDate}
                        onChange={handleType}
                        required='true'
                        className="border rounded form-control" 
                        type="date" style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Tipo de proyecto</strong></label>
                      <select 
                        id="typeProyect" 
                        value={dataObject.typeProyect}
                        onChange={handleType}
                        className="border rounded form-control" 
                        style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}
                       >
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
                      <select 
                        id="objectiveProject"
                        value={dataObject.objectiveProject} 
                        onChange={handleType}
                        className="border rounded form-control" 
                        style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}
                       >
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
                      <select 
                        id="statusProject" 
                        value={dataObject.statusProject}
                        onChange={handleType}
                        className="border rounded form-control" 
                        style={{color: "rgb(110, 112, 126)", padding: "6px 12px"}}
                       >
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
                        <textarea 
                          id="projectComment" 
                          value={dataObject.projectComment}
                          onChange={handleType}
                          required='true' 
                          className="border rounded form-control" 
                          style={{padding: "6px 12px", color: "rgb(110, 112, 126)", height: "100px"}}
                        />
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
                      <input 
                        id="enterpriseProject" 
                        value={dataObject.enterpriseProject}
                        onChange={handleType}
                        required='true' 
                        className="form-control" 
                        type="text" 
                        placeholder="Nombre de la empresa" 
                        name="username"/>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="email"><strong>Correo electronico de la empresa</strong><br/></label>
                      <input 
                        id="enterpriseContact" 
                        value={dataObject.enterpriseContact}
                        onChange={handleType}
                        required='true' 
                        className="form-control" 
                        type="email" 
                        placeholder="ejemplo@ejemplo.com" 
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="form-group">
                      <label for="first_name"><strong>Nombre(s)</strong></label>
                      <input 
                        id="firstNameContact" 
                        value={dataObject.firstNameContact}
                        onChange={handleType}
                        required='true' 
                        className="form-control" 
                        type="text" 
                        placeholder="Juan" 
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group">
                      <label for="last_name"><strong>Apellido(s)</strong></label>
                      <input 
                        id="lastNameContact" 
                        value={dataObject.lastNameContact}
                        onChange={handleType}
                        required='true'
                        className="form-control" 
                        type="text" 
                        placeholder="Perez" 
                        name="last_name"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Datos de los alumnos participantes</p>
            </div>
            <div className="card-body">
              <div className="dynamic-wrap-student" >
                {
                addStudent.length === 0 ? setAddStudent(prevState => [...prevState, Math.floor(Math.random() * 1000)]) : null
                }
                {
                  addStudent.map((value, index) => {
                    if(index === (addStudent.length-1)){
                      return(
                        <AddStudent handleAdd={handleStudents} handleDelete={deleteStudent} trigger={true} key={value} dataKey={value} dataObject={dataObject} setDataObject={setDataObject} index={index}/>
                      )
                    }
                    else{
                      return(
                        <AddStudent handleAdd={handleStudents} handleDelete={deleteStudent} trigger={false} key={value} dataKey={value} dataObject={dataObject} setDataObject={setDataObject} index={index}/>
                      )
                    }
                  }) 
                }
              </div>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-header py-3">
              <p className="text-primary m-0 font-weight-bold">Datos de los maestros participantes</p>
            </div>
            <div className="card-body">
              <div className="dynamic-wrap-teacher">
                {
                addTeacher.length === 0 ? setAddTeacher(prevState => [...prevState, Math.floor(Math.random() * 1000)]) : null
                }
                {
                  addTeacher.map((value, index) => {
                    if(index === (addTeacher.length-1)){
                      return(
                        <AddTeacher handleAdd={handleTeachers} handleDelete={deleteTeacher} trigger={true} key={value} dataKey={value} dataObject={dataObject} setDataObject={setDataObject} index={index}/>
                      )
                    }
                    else{
                      return(
                        <AddTeacher handleAdd={handleTeachers} handleDelete={deleteTeacher} trigger={false} key={value} dataKey={value} dataObject={dataObject} setDataObject={setDataObject} index={index}/>
                      )
                    }
                  }) 
                }
              </div>
            </div>
          </div>
          <div className="form-group">
            <button id="proyectBtn" className="btn btn-primary text-capitalize font-weight-bold" type="button" onClick={() => console.log("Value: ",dataObject)}>Guardar datos</button>
            <button onClick={() => {alert("This is an alert!")}} id="deleteBtn" className="btn btn-danger text-capitalize font-weight-bold" type="button">Eliminar Proyecto</button>
          </div>
        </div>
      </form>
    </div>
  )
};

export default CreateProject;