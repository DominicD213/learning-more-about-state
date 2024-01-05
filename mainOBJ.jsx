import React from 'react'

const MainOBJ = ({image, title, description}) => {
  // this is created a layout for how you would like your component to be used.
  // when used in the app.jsx file parameters will be given and be plugged into the component
  return (
    <div>
        <img src={image} alt="img" />
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default MainOBJ