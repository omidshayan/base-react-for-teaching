import React, { useEffect, useState } from 'react'

export default function LogHook(value) {
    useEffect(() => {
        console.log(value)
    },[value])

  return (
    <>

    </>
  )
}
