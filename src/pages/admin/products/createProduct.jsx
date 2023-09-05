import React from 'react'
import './../style.css';
function CreateProduct() {
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
                <div className="title-text">افزودن وسیله جدید</div>
            </div>
            <br />
            <div className="insert">
                <form action="">
                    <div>title name</div>
                    <input type="text" placeholder="title..." name="name" autocomplete="off" />
                    <div role="option"></div>
                    <div>select option </div>
                    <select name="select">
                        <option selected disabled>please select item</option>
                        <option value="item 1">item 1</option>
                        <option value="item 2">item 2</option>
                        <option value="item 3">item 3</option>';
                    </select>
                    <div>title name </div>
                    <input type="text" placeholder="title name..." name="name" />
                    <div>title name </div>
                    <input type="text" placeholder=" title name..." name="model" />
                    <div>title name</div>
                    <input type="text" placeholder=" title name..." name="color" />
                    <input type="submit" value="insert" className="btn" />
                </form>
            </div>
        </main>



    </div>
    </>
  )
}

export default CreateProduct