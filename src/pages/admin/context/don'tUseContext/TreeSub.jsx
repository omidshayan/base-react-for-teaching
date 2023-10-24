import React from 'react'
import Four from './Four'


export default function TreeSub({tree}) {
  return (
    <div>TreeSub:
        <h1>
            {tree}
            <Four four={tree}/>
        </h1>
    </div>
  )
}
