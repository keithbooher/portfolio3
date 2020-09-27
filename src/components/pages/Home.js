import React from 'react';

const Home = ({ mobile }) => {
  let containerStyle = {
    position: "absolute", 
    top: "50%",
    left: "18%",
    width: "60%",
    transform: "translate(0%, -60%)",
    zIndex: 9,
    fontSize: "35px"
  }
  if (mobile) {
    containerStyle = {
      position: "absolute", 
      top: "50%",
      left: "8%",
      width: "90%",
      transform: "translate(0%, -60%)",
      zIndex: 9,
      fontSize: "20px"
    }
  }
  return (
    <div style={containerStyle}>
      <h1>Hi, Im Keith!</h1>
      <h1>I develop websites and applications</h1>
      <h2>I value intuitiveness and creativity</h2>
    </div>
  )
}

export default Home