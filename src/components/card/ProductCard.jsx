import React, { useContext } from "react";
import "./productCard.css";
import ProductsContext from "../../context/ProductsContext";

export default function ProductCard() {
  const ProductsContextData = useContext(ProductsContext);

  return (
    <>
      {ProductsContextData.proDate.map((productsDataFromContext) => (
        <div className="ProductCard">
          <div className="cardTitle">{productsDataFromContext.title}</div>
          <div className="cardImg">
            <img src="/img/img-1.jpg" alt="" />
          </div>
          <div className="desc">{productsDataFromContext.desc}</div>
          <div className="price">{productsDataFromContext.price}</div>
          <div onClick={() => {
              ProductsContextData.setIsShow(true)
            setTimeout(() =>{
              ProductsContextData.setIsShow(false)
            },2000);
            let newAddCard = {
              id: productsDataFromContext.userCard.length = 1,
              title: productsDataFromContext.title,
              price: productsDataFromContext.price,
            };
            productsDataFromContext.setUserCard((prev) => [
              ...prev, newAddCard,
            ]);

            
            }} className="addtocard">
            <span>Add To Card</span>
          </div>
        </div>
      ))}
    </>
  );
}
