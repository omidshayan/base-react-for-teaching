import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import User from "./Users";
import Book from "../books/Book";

function Dashboard() {
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
          <div className="report">
            <div className="report-item">
              <div className="report-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="report-text">
                <span>تعداد بازدید</span>
              </div>
            </div>

            <div className="report-item">
              <div className="report-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="report-text">
                <span>تعداد بازدید</span>
              </div>
            </div>
            <div className="report-item">
              <div className="report-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="report-text">
                <span>تعداد بازدید</span>
              </div>
            </div>
          </div>
          <User />
        </main>
        <br />
        <br />
        <div className="card">
          <Book name="hilgard" description="description for helgard" />
          <Book name="5 clock" description="description for 5 clock" />
          <Book name="butifull" description="description for butifull" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
