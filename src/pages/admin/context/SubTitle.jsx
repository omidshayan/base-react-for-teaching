import React from 'react'
import TowSub from './TowSub'

export default function SubTitle({subone}) {
  return (
    <div>title is: <h1>
        {subone}
        </h1>
        <br />
        <TowSub tow={'tow sub title'}/>
        </div>
  )
}
