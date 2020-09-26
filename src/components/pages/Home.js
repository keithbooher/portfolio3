import React from 'react';

const Home = ({ mobile }) => {
  let containerStyle = {
    position: "absolute", 
    top: "50%",
    transform: "translate(0px, -70%)",
    zIndex: 9
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