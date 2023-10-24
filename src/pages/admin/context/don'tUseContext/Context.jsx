import React from "react";
import "../.././style.css";
import { Link } from "react-router-dom";
import User from "../../Users";
import Book from "../../../books/Book";
import Counter from "../../../exmaple/Counter";
import SubTitle from "./SubTitle";



function Context() {
  const books = [
    {id: 1, name: "hilgard", description: "description"},
    {id: 2, name: "java learn" , description: "description"},
    {id: 3, name: "php learn" , description: "description"},
  ]
  return (
    <>
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
        <br />
        <br />
        <SubTitle subone={'subone'} />
      </div>
    </>
  );
}

export default Context;
