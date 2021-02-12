import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
 
const AddStudent = ({addStudent, setAddStudent, setCount}) =>{
  const [trigger, setTrigger] = useState(true);
  const [textFields, setTextFields] = useState({
    nameStudent: "", 
    idStudent: ""
  })

  const handleType = e => {
    const {id, value} = e.target;
    setTextFields(prevState => ({
      ...prevState,
      [id] : value
    }))
  }

  const addRemove = () => {
    if(trigger){
      let count = Object.keys(addStudent).length;
      setAddStudent(prevState => ({
        ...prevState,
        [count + 1]  : <AddStudent setAddStudent={setAddStudent} addStudent={addStudent} setCount={setCount}></AddStudent>
      }));
      setTrigger(false)
      setCount(count + 1)
      console.log(addStudent)
    } else {alert("remove")} 
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
              <label for="city"><strong>Numero de Control</strong></label>
              <input 
                id="idStudent"
                value={textFields.idStudent}
                onChange={handleType}
                required='true' 
                className="form-control studentId" 
                type="text" 
                placeholder="Numero de control" 
                name="city"/>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <div className="input-group-btn" style={{marginTop: "1.5em"}}>
                <button className="btn btn-success btn-add-student" type="button" onClick={() => addRemove()}>
                  <FontAwesomeIcon icon={faPlus}  />
                </button>
                <button className="btn btn-success btn-add-student" type="button" onClick={() => alert(textFields.nameStudent + textFields.idStudent)}>{'^'}</button>
              </div>
            </div>
          </div> 
        </div>
        
      </div>
      {
       // fields > 0 ? fields : null
      }
    </form>
  );
};

export default AddStudent;