import React from 'react'

import './counter.css';


function Counter() {
  return (
    <div className='counter'>
        <h1>counter</h1>
        <div className="box">
            <button>
                +
            </button>
            <h3>4</h3>
            <button>
                -
            </button>
        </div>
    </div>
  )
}

export default Counter