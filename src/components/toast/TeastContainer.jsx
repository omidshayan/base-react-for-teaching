import React, { useContext } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

import './toast.css';
import ProductsContext from '../../context/ProductsContext';


export default function TeastContainer() {
  const showContext = useContext(ProductsContext);

  
  return (
    <div className={`toast-body ${showContext.isShow ? 'show' : ''}`}>
        <div className="toast-icon" onClick={() => {showContext.setIsShow(false)}}><AiOutlineClose /></div>
        <div className="toast-title">Added To Your Card</div>
    </div>
  )
}
