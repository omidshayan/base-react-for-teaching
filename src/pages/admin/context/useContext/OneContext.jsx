import React, { useContext } from 'react'
import { UserDataContext } from './context';


export default function OneContext() {

  const username = useContext(UserDataContext)
  return (

    <div>OneContext: {username} </div>
  )
}
