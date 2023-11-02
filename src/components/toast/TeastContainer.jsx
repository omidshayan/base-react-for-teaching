import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

import './toast.css';


export default function TeastContainer() {
  return (
    <div className='toast-body'>
        <div className="toast-icon"><AiOutlineClose /></div>
        <div className="toast-title">Added To Your Card</div>
    </div>
  )
}
