import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import apis from '../../API';

const Project = () => {

  const [projectData, setProjectData] = useState({});
  let { id } = useParams();
  
  useEffect(() => {
    try
    {
      const payload = {
        "id": id,
      }
      apis.getProjectById(payload).then(result => {
        setProjectData(result)
      });
    }catch(error){
      alert(error)
    }
  }, [id])
 
  console.log(projectData)

  return(
    <div className="d-flex center align-content-center justify-content-center">This is the project page</div>
  );
};

export default Project; 