import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const MyWork = ({ mobile }) => {
  const [ projects, setProjects ] = useState(null)

  const getProjects = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/projects")
    setProjects(data)
  }

  useEffect(() => {
    getProjects()
    return () => {};
  }, []);

  let containerStyle = {
    zIndex: 9
  }

  return (
    <div style={containerStyle}>
      <h1 className="text-align-center font-size-40">My Work</h1>
      {mobile ?
        <MobileLayout projects={projects} />
      :
        <DesktopLayout projects={projects} />    
      }

    </div>
  )
}

const MobileLayout = ({ projects }) => {
  return (
    <div className="flex-column">
      {projects ? 
        projects.map((project, index) => {
          return (
            <div key={index} className="border-bottom" style={{ paddingBottom: "10px" }}>
              <h2 className="text-align-center">{project.project_name}</h2>
              <img />
              <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

const DesktopLayout = ({ projects }) => {
  return (
    <div className="flex flex-wrap space-evenly">
      {projects ? 
        projects.map((project, index) => {
          let flex_basis_percent = "25%"

          switch (projects.length) {
            case 1:
              flex_basis_percent = "100%"              
              break;
            case 2:
              flex_basis_percent = "50%"              
              break;
            case 3:
              flex_basis_percent = "33.33%"              
              break;
            default:
              flex_basis_percent = "25%"
              break;
          }
          return (
            <div key={index} className={`flex-basis-${flex_basis_percent}`}>
              <div className="padding-s">
                <h2 className="text-align-center">{project.project_name}</h2>
                <img />
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
              </div>
            </div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default MyWork