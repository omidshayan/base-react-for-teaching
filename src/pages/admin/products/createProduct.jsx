import React, { useState } from 'react'
import './../style.css';
import { Axios } from 'axios';

function CreateProduct() {
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState([]);
    const [color, setColor] = useState([]);
    const [count, setCount] = useState([]);
    const handleSubmit = () =>{
        Axios.post("/localhost:5000/api/createProduct", {
            name : product,
            price : price,
            color : color,
            count : count
        });
        console.log(product);
    }
  return (
    <>
    <input type="text" id="menu-toggle" />
    <div className="sidebar">
        <div className="sidebar-section">
            <div className="brand-name">
                Arya Tech
            </div>
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
                    <li><a href={'dashboard'} className="active">
                            <i className="fas fa-tachometer-alt"></i>
                            <span>داشبورد</span>
                        </a></li>
                    <li>
                        <a href={'createProduct'}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span>ثبت محصول</span>
                        </a>
                    </li>
                    <li>
                        <a href={'products'}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span>نمایش محصولات</span>
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
        <main>
            <div className="title">
                <div className="title-text">افزودن محصول جدید</div>
            </div>
            <br />
            <div className="insert">
                <form onSubmit={handleSubmit}>
                    <div>نام محصول </div>
                    <input type="text" placeholder="نام..." name="name" onChange={(e) => setProduct(e.target.value)} />
                    <div>قیمت </div>
                    <input type="text" placeholder="قیمت..." name="price" onChange={(e) => setPrice(e.target.value)} />
                    <div>رنگ محصول  </div>
                    <input type="text" placeholder=" رنگ محصول..." name="color" onChange={(e) => setColor(e.target.value)} />
                    <div>تعداد</div>
                    <input type="text" placeholder=" تعداد..." name="count"  onChange={(e) => setCount(e.target.value)}/>
                    <input type="submit" value="ثبت" className="btn" />
                </form>
            </div>
        </main>
    </div>
    </>
  )
}

export default CreateProduct