import React, { useState, useEffect } from 'react';
import Table from '../../Components/Table';
import apis from '../../API'



const Projects = () =>{
  const [projectsData, setProjectsData] = useState({})
  
  useEffect(() => {
    async function fetchData () {
      const value = await apis.getProjects()
      setProjectsData(value)
    }
    fetchData()
  }, [])
  
  
  
  
  return(
    <div className="container-fluid">
      <h1 className="text-left">Projects</h1>
      <Table projectsData={projectsData}/>
    </div>
  )
}

export default Projects;