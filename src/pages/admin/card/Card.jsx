import React, { useState } from "react";
import "./Card.css";
import { BsBag } from "react-icons/bs";
import ProductCard from "../../../components/card/ProductCard";
import TeastContainer from "../../../components/toast/TeastContainer";

import Data from "../../../data";
import CardList from "../../../components/cardList/CardList";

import ProductsContext from './../../../context/ProductsContext';


function Card() {

  const [isShow, setIsShow] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [userCard, setUserCard] = useState([])

  const [proDate, setProDate] = useState(Data);
  return (
    <>
    <ProductsContext.Provider value={{
      proDate,
      isShow,
      setIsShow,
      isActive,
      setIsActive,
      userCard,
      setUserCard,
    }}>

      <input type="text" id="menu-toggle" />
      <div className="sidebar">
        <div className="sidebar-section">
          <div className="brand-name">Arya Tech</div>
          <div className="avatar">
            <div className="img-avatar">
              <img src="assets/img/profile.png" alt="" />
            </div>
            <div className="info-avatar">
              <div className="text-avatar">
                <div>Arya Tech Co</div>
              </div>
              <span className="fas fa-chevron-down"></span>
            </div>
          </div>
          <div className="sidebar-item">
            <ul>
              <li>
                <a href={"dashboard"} className="active">
                  <i className="fas fa-tachometer-alt"></i>
                  <span>داشبورد</span>
                </a>
              </li>
              <li>
                <a href={"createProduct"}>
                  <i className="fas fa-tachometer-alt"></i>
                  <span>ثبت محصول</span>
                </a>
              </li>
              <li>
                <a href={"products"}>
                  <i className="fas fa-tachometer-alt"></i>
                  <span>نمایش محصولات</span>
                </a>
              </li>
              <li>
                <a href={"useInput"}>
                  <i className="fas fa-tachometer-alt"></i>
                  <span> useInput Hook</span>
                </a>
              </li>
              <li>
                <a href={"/context"}>
                  <i className="fas fa-tachometer-alt"></i>
                  <span> context</span>
                </a>
              </li>

              <li>
                <a href={"/useContext"}>
                  <i className="fas fa-tachometer-alt"></i>
                  <span> use from context</span>
                </a>
              </li>

              <li>
                <a href={"/addtocard"}>
                  <i className="fas fa-tachometer-alt"></i>
                  <span>Add To Card</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="content">
        <header>
          <div className="hamber">
            <i className="fas fa-bars"></i>
          </div>
        </header>
        <h2>Add To Card</h2>
        <br />
        <br />
        <div onClick={() => {setIsActive(true)}} className="head">
          <BsBag className="icon" />
          <span>0</span>
        </div>
        <hr className="hr" />
        <div className="allCard">
              <ProductCard className="evryCard"/>
        </div>
        </div>
          <TeastContainer />
          <CardList />
        </ProductsContext.Provider>
    </>
  );
}

export default Card;
