import React, { useState, useEffect } from 'react';
import CustomTable from '../../Components/Table';
import apis from '../../API';
import Spinner from 'react-bootstrap/Spinner';
import './styles.css';

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
    <div className="d-flex justify-content-center align-items-center w-100">
      <div  id="hide-scroll__parent" className="">
        <div id="hide-scroll__child" className="container-fluid h-100 overflow-auto mb-4 d-flex justify-content-center align-items-center w-100">
          { loading ? <Spinner animation="border" role="status" /> : <CustomTable projectsData={projectsData}/>}
        </div>
      </div>
    </div>
    
  )
}

export default Projects;