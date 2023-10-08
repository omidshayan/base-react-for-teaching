import React, { useState } from 'react'

function CreateProduct() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`this is text for ${name} and this is ${price}`)
}
  return (
    <>
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
                    <li>
                        <a href={'useInput'}>
                            <i className="fas fa-tachometer-alt"></i>
                            <span> useInput Hook</span>
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
                    <input type="text" placeholder="نام..." name="name" onChange={(e) => setName(e.target.value)} />
                    <div>قیمت </div>
                    <input type="text" placeholder="قیمت..." name="price" onChange={(e) => setPrice(e.target.value)} />
                    <input type="submit" value="ثبت" className="btn" />
                </form>
            </div>
        </main>
    </div>
    </>
  )
}

export default CreateProduct

