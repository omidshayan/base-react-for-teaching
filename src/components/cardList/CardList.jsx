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
      <div className="card-item">
        <img src="img/img-1.jpg" alt="" className="card-img" />
        <div className="card-price">2350$</div>
        <div className="card-name">node js</div>
      </div>      <div className="card-item">
        <img src="img/img-1.jpg" alt="" className="card-img" />
        <div className="card-price">2350$</div>
        <div className="card-name">node js</div>
      </div>      <div className="card-item">
        <img src="img/img-1.jpg" alt="" className="card-img" />
        <div className="card-price">2350$</div>
        <div className="card-name">node js</div>
      </div>      <div className="card-item">
        <img src="img/img-1.jpg" alt="" className="card-img" />
        <div className="card-price">2350$</div>
        <div className="card-name">node js</div>
      </div>
    </div>
  )
}
