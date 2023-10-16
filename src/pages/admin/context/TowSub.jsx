import React from 'react'
import TreeSub from './TreeSub'

export default function TowSub({tow}) {
  return (
    <div>TowSub: 

        <h1>
            {tow}
        </h1>
        <TreeSub tree={'tree sub'}/>
    </div>
  )
}
