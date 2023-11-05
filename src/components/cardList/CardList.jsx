import React, { useContext, useState } from 'react'
import './cardList.css';
import {AiOutlineClose} from 'react-icons/ai'
import ProductsContext from '../../context/ProductsContext';


export default function CardList() {

  const showCard = useContext(ProductsContext);

  return (
    <div className={`${showCard.isActive ? 'active' : ''} card-container`}>
      <div className="top-child">
        <div onClick={() => {showCard.setIsActive(false)}}
      className="card-list-icon"><AiOutlineClose /></div>
        <div className="card-list-title">Card List</div>
      </div>
      <hr />
      {showCard.userCard.map((products =>(
              <div className="card-item" key={products.id}>
              <img src="img/img-1.jpg" alt="" className="card-img" />
              <div className="card-price">{products.price}</div>
              <div className="card-name">{products.name}</div>
            </div>
      )))}
    </div>
  )
}
