import React from 'react';

const Content = ({ children }) => {

  return (
    <div className="padding-xl color-white" style={{ flexBasis: "auto", width: "100%" }}>
      { children }
    </div>
  )
}

export default Content