import React from "react";
import "./productCard.css";

export default function ProductCard({ key, title, desc }) {
  return (
    <div className="ProductCard">
      <div className="cardTitle">{title}</div>
      {key}
      <div className="cardImg">
        <img src="/img/img-1.jpg" alt="" />
      </div>
      <div className="desc">
        {desc}
      </div>
      <div className="price">
        300$
      </div>
      <div className="addtocard">
        <span>Add To Card</span>
      </div>
    </div>
  );
}
