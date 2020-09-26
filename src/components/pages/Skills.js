import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ mobile }) => {
  const [ skills, setSkills ] = useState(null)

  const getSkills = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/pages?Name=Skills")
    setSkills(data[0])
  }

  useEffect(() => {
    console.log('hi')
    getSkills()
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
      <h1 className="text-align-center font-size-40">Skills</h1>
      {skills ? 
        skills.contents.map((skill_section, index) => {
          return (
            <div key={index} style={contentContainerStyle}>{skill_section.content}</div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default Skills