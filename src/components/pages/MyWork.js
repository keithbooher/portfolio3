import React from 'react';

const MyWork = ({ mobile }) => {
  return (
    <div>
      <h1>My Work</h1>
      {mobile ?
        <MobileLayout />
      :
        <DesktopLayout />    
      }

    </div>
  )
}

const MobileLayout = ({}) => {
  return (
    <div className="flex-column">
      <div className="border-bottom" style={{ paddingBottom: "10px" }}>
        <h2>Keith Commerce</h2>
        <img />
        <div>A fully comprehensive e-commerce framework</div>
      </div>
      
      <div className="border-bottom" style={{ paddingBottom: "10px" }}>
        <h2>Keith Commerce</h2>
        <img />
        <div>A fully comprehensive e-commerce framework</div>
      </div>
    </div>
  )
}

const DesktopLayout = ({}) => {
  return (
    <div className="flex flex-wrap">
      <div className="flex-basis-25">
        <h2>Keith Commerce</h2>
        <img />
        <div>A fully comprehensive e-commerce framework</div>
      </div>
      
      <div className="flex-basis-25">
        <h2>Keith Commerce</h2>
        <img />
        <div>A fully comprehensive e-commerce framework</div>
      </div>
    </div>
  )
}

export default MyWork