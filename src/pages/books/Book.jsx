import React from 'react'
import './style.css';

function Book(props) {
  return (
    <>
        <div className="main">
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>
        </div>
    </>
  )
}

export default Book