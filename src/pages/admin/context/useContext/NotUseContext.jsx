import React, { useContext } from 'react'

import {UserDataContext} from './context'

export default function NotUseContext() {
    const name = useContext(UserDataContext)
  return (
    <div>NotUseContext {name}</div>
  )
}
