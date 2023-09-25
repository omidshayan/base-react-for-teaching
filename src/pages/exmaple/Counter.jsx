import React, { useState } from 'react'

import './counter.css';


function Counter() {
    const [count, setCount] = useState(0);

    function plush (){
        setCount (count + 1);
    }
    function minese (){
        setCount (count - 1);
    }

  return (
    <div className='counter'>
        <h1>counter</h1>
        <div className="box">
            <button onClick={plush}>
                +
            </button>
            <h3>
                {count}
            </h3>
            <button onClick={minese}>
                -
            </button>
        </div>
    </div>
  )
}

export default Counter