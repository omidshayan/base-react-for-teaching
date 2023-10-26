import React, { useContext } from 'react'
import {UserDataContext} from './context';



export default function TwoContext() {
  const username = useContext(UserDataContext);


  return (
    <div>TwoContext: {username} </div>
  )
}
