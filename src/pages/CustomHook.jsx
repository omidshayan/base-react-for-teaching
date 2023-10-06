import React, { useEffect, useState } from 'react'
import LogHook from './LogHook'



export default function CustomHook() {
    const [name, setName] = useState('')
    LogHook(name)
  return (
    <>
    <div style={{margin: '100px',width: '80%'}}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
    </>
  )
}
