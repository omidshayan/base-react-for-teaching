import React from 'react'
import './style.css';

function Book({name, description}) {
    // const {name, description} = props
  return (
    <>
        <div className="main">
            <h3>{name}</h3>
            <h5>{description}</h5>
        </div>
    </>
  )
}

export default Book