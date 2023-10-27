import React, { useContext } from 'react'
import { username } from './context'

export default function PageTwo() {
    const name = useContext(username)
  return (
    <div>PageTwo-username is: {name}</div>
  )
}
