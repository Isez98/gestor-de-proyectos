import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
 
const AddStudent = ({handleAdd, handleDelete, trigger, dataKey}) =>{
  const [textFields, setTextFields] = useState({
    nameStudent: "", 
    idStudent: ""
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
    <form autocomplete="off">
      <div className="entry-student input-group">
        <div className="form-row"  style={{width: "100%"}}>
          <div className="col">
            <div className="form-group">
              <label for="city"><strong>Nombre del Alumno Participante</strong></label>
              <input 
                id="nameStudent"
                value={textFields.nameStudent}
                onChange={handleType}
                required='true' 
                className="border rounded form-control studentName" 
                type="text" 
                placeholder="Nombre del alumno" 
                name="city"/>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label for="city"><strong>Número de Control</strong></label>
              <input 
                id="idStudent"
                value={textFields.idStudent}
                onChange={handleType}
                required='true' 
                className="form-control studentId" 
                type="text" 
                placeholder="Número de control" 
                name="city"/>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <div className="input-group-btn" style={{marginTop: "1.5em"}}>
                <button className={trigger? classAdd : classRemove} type="button" onClick={addRemove}>
                  {trigger? <FontAwesomeIcon icon={faPlus}/> : <FontAwesomeIcon icon={faMinus}/>}
                </button>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </form>
  );
};

export default AddStudent;