import React, { useEffect, useState } from 'react';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const About = ({ mobile }) => {
  const [ about, setAbout ] = useState(null)

  const getAbout = async () => {
    let { data } = await axios.get("https://strapi-portfolio-kb.herokuapp.com/pages?Name=About")
    setAbout(data[0])
  }

  useEffect(() => {
    getAbout()
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
      <h1 className="text-align-center font-size-40">About</h1>
      {about ? 
        about.contents.map((about_section, index) => {
          return (
            <div key={index} style={contentContainerStyle}>{about_section.content}</div>
          )
        })
      :
        <div className="spinner_container"><FontAwesomeIcon className="font-size-40" icon={faSpinner} spin /> </div>
      }
    </div>
  )
}

export default About