import React, { useContext } from 'react'
import {UserDataContext} from './context';


export default function ThreeContext() {
  const name = useContext(UserDataContext);
  return (
    <div>ThreeContext: {name} </div>
  )
}
