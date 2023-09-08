import React, { useEffect, useState } from "react";
import "./../style.css";
import Axios from "axios";

function Products() {
  const [ali, setProducts] = useState([]);
  useEffect(async function () {
    try {
      const result = await Axios.get("localhost:5000/api/products", {});
      setProducts(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
            <div className="title-text">title in page</div>
          </div>
          <br />
          <div className="table-wrapper">
            <table className="fl-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>نام</th>
                  <th>دسته بندی </th>
                  <th>تعداد</th>
                  <th>قیمت</th>
                  <th>چاپ</th>
                  <th>ویرایش</th>
                </tr>
              </thead>
              <tbody>
                {ali.map((product,index) =>  {
                  return (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>book 1</td>
                      <td>programming</td>
                      <td>230 </td>
                      <td>
                        <a href="#">
                          <i className="fas fa-print"></i>
                        </a>
                      </td>
                      <td>
                        <a href="#">
                          <i className="fas fa-edit"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default Products;
