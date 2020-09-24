import React from 'react';

const Skills = ({ mobile }) => {
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
    <div>
      <h1 className="text-align-center font-size-40">Skills</h1>
      <div style={contentContainerStyle}>Hi this is a long block of bullshit Hi this is a long block of bullshit Hi this is a long block of bullshit Hi this is a long block of bullshit</div>
    </div>
  )
}

export default Skills