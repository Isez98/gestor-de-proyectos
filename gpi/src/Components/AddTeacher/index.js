import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const AddTeacher = ({handleAdd, handleDelete, trigger, dataKey}) => {
  const [textFields, setTextFields] = useState({
    nameTeacher: "", 
    idTeacher: "",
    subject: ""
  })
  const classAdd = "btn btn-success btn-student";
  const classRemove ="btn btn-danger btn-student";

  const handleType = e => {
    const {id, value} = e.target;
    setTextFields(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const addRemove = e => {
    if(trigger){
      handleAdd(Math.floor(Math.random()*1000))
    } else {
      handleDelete(dataKey)
    } 
  }

  return(
    <form autoComplete="off">
      <div className="entry-teacher input-group">
        <div className="form-row" style={{width: "100%"}} >
          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="city"><strong>Nombre del Maestro Participante</strong><br/></label>
              <input 
                id="nameTeacher"
                value={textFields.nameTeacher}
                onChange={handleType}
                required='true' 
                className="border rounded form-control teacherName" 
                type="text" 
                placeholder="Nombre del maestro" 
                name="city"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group"><label htmlFor="city"><strong>Numero de Empleado</strong></label>
              <input 
                id="idTeacher"
                value={textFields.idTeacher}
                onChange={handleType}
                required='true' 
                className="form-control teacherId" 
                type="text" 
                placeholder="Número de empleado" 
                name="city"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <label htmlFor="city"><strong>Materia del Maestro</strong><br/></label>
              <input 
                id="subject"
                value={textFields.subject}
                onChange={handleType}
                required='true'
                className="border rounded form-control teacherSubject"
                type="text"
                placeholder="Materia"
                name="city"
              />
            </div>
          </div>
          <div className="col-sm">
            <div className="form-group">
              <div className="input-group-btn" style={{marginTop: "1.5em"}} >
                <button className={trigger? classAdd : classRemove} type="button" onClick={addRemove}>
                  {trigger? <FontAwesomeIcon icon={faPlus}/> : <FontAwesomeIcon icon={faMinus}/>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddTeacher;