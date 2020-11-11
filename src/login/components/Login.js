import React from 'react';
import './Login.css'

function Login(props) {
    return (


        <form action="" method="post" className="form-login">
            <div className="imgcontainer">
                <h2>ورود</h2>
            </div>

            <div className="container">
                <label htmlFor="username"><b>شماره تلفن</b></label>
                <label>
                    <input type="text" placeholder="شماره تلفن خود را وارد نمایید" name="username" required className="input-login"/>
                </label>

                <label htmlFor="psw"><b>رمز عبور</b></label>
                <label>
                    <input type="password" placeholder="رمز عبور خود را وارد نمایید" name="psw" required className="input-login"/>
                </label>

                <button type="submit" className="button-login">ورود</button>

            </div>

            <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                <button type="button" className="cancelbtn button-login">بزن بریم صفحه ثبت نام</button>
            </div>
        </form>
    );
}

export default Login;