import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = ({ mobile }) => {
  const [ experience, setExperience ] = useState(null)

  const getExperience = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/pages?Name=Experience")
    setExperience(data[0])
  }

  useEffect(() => {
    getExperience()
    return () => {};
  }, []);

  let contentContainerStyle = {}
  if (mobile) {
    contentContainerStyle = {
      margin: "30px 0px 0px 0px"
    }
  } else {
    contentContainerStyle = {
      width: "80%",
      margin: "0px auto"
    }
  }

  return (
    <div style={{ zIndex: 9 }}>
      <h1 className="text-align-center font-size-40">Work Experience</h1>
      {experience ? 
        experience.contents.map((experience_section, index) => {
          return (
            <div key={index} style={contentContainerStyle}>{experience_section.content}</div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default WorkExperience