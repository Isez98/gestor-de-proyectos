import React, { useState, useEffect } from 'react';
import CustomTable from '../../Components/Table';
import apis from '../../API';
import Spinner from 'react-bootstrap/Spinner';

const Projects = () =>{
  const [projectsData, setProjectsData] = useState({})
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData () {
      await apis.getProjects().then(result => {
        setLoading(false);
        setProjectsData(result);
      })      
    }
    fetchData()
  }, [])
  
  return(
    <div className="container-fluid">
      <h1 className="text-left">Projects</h1>
      { loading ? <Spinner animation="border" role="status" /> : <CustomTable projectsData={projectsData}/>}
    </div>
  )
}

export default Projects;