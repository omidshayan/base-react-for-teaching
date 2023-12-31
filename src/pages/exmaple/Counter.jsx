import React, { useEffect, useState } from 'react'

import './counter.css';


function Counter() {
    const [count, setCount] = useState(0);

    const plus = () =>{
        setCount((prevState) =>{
            return prevState + 1;
        });
    }
    const minus = () =>{
        setCount(prevState => {
            return prevState -1;
        })
    }

    // useEffect(() =>{
    //         console.log('useEffect')
    // },[])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
      },[])
  

  return (
    <div className='counter'>
        <h1>counter</h1>
        <div className="box">
            <button onClick={plus}>
                +
            </button>
            <h3>
                {count}
            </h3>
            <button onClick={minus}>
                -
            </button>
        </div>
    </div>
  )
}

export default Counter