import React, { useContext } from 'react'
import {username} from './context';



export default function PageOne() {
    const name = useContext(username)
  return (
    <div>PageOne-username is: {name} </div>
  )
}
