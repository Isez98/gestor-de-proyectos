import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
 
const AddStudent = ({handleAdd, handleDelete, trigger, dataKey, dataObject, index, setDataObject}) =>{
  const [textFields, setTextFields] = useState({
    studentName: "", 
    studentID: ""
  })

  const classAdd = "btn btn-success btn-student";
  const classRemove ="btn btn-danger btn-student";

  const handleType = e => {
    const {id, value} = e.target;
    setTextFields(prevState => ({
      ...prevState,
      [id] : value
    }));
  }

  useEffect(() => {
    let studentList = dataObject.studentsInfo;
    studentList[index] = textFields;
    setDataObject(prevState => ({
      ...prevState, 
      studentsInfo: studentList
    }));
  }, [textFields, setDataObject, dataObject.studentsInfo, index])

  const addRemove = e => {
    if(trigger){
      handleAdd(Math.floor(Math.random()*1000))
    } else {
      handleDelete(dataKey)
      let copyData = dataObject.studentsInfo;
      copyData = copyData.splice(index, 1)
      setDataObject(prevState => ({
        ...prevState, 
        studentsInfo: copyData
      }))
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
                id="studentName"
                value={textFields.studentName}
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
                id="studentID"
                value={textFields.studentID}
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