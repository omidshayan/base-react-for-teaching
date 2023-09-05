import React, { useState } from 'react'
import './style.css';
import { Axios } from 'axios';
function Login() {

  const [getUsername, setUserName] = useState(null);
  const [getPassword, setPassword] = useState(null);
  const handleSubmit = () =>{
    Axios.post("/localhost:5000/api/auth/login",{
      username : getUsername,
      password : getPassword
    })
    console.log(getUsername, getPassword);
  }
  return (
    <>
    <div className="login">
        <div className="login-form">
            <h2>ورود به سیستم</h2>
            <div className="avatar-login">
                <img src="./../../assets/img/profile.png" alt="" />
            </div><br />
            <form onSubmit={handleSubmit}>
                <span>نام کاربری</span><br />
                <input type="text"
                 name="username"
                 onChange={(e) => setUserName(e.target.value)}
                 placeholder="نام کاربری خود را وارد کنید..."
                  required /><br />
                <span>رمزعبور</span><br />
                <input type="password"
                onChange={(e) => setPassword(e.target.value)}
                 name="password"
                  placeholder="رمز عبور خود را وارد کنید..."
                   required /><br />
            <a href={'dashboard'} className="my-btn btn-custom">ورود به پنل مدیر</a>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login