import React from 'react';
import "./SignUp.css"

function SignUp() {
    return (
        <div className="div-form-signup">
            <form className="form-signup-tag" action="">
                <div className="container-signup-form">
                    <h1 style={{ textAlign: "center" }} >ثبت نام</h1>
                    <p style={{ textAlign: "center" }} >برای ساخت حساب کاربری اطلاعات زیر را وارد نمایید</p>
                    <hr/>

                    <label htmlFor="username"><b>شماره تلفن</b></label>
                    <label>
                        <input type="text" placeholder="شماره تلفن خود را وارد نمایید" name="username" required/>
                    </label>

                    <label htmlFor="first_name"><b>نام</b></label>
                    <label>
                        <input type="text" placeholder="نام خود را وارد نمایید" name="first_name" required/>
                    </label>

                    <label htmlFor="last_name"><b>نام خانوادگی</b></label>
                    <label>
                        <input type="text" placeholder="نام خانوادگی خود را وارد نمایید" name="last_name" required/>
                    </label>

                    <label htmlFor="psw"><b>رمز عبور</b></label>
                    <label>
                        <input type="password" placeholder="رمز عبور خود را وارد نمایید" name="psw" required/>
                    </label>

                    <label htmlFor="psw-repeat"><b>تکرار رمز عبور</b></label>
                    <label>
                        <input type="password" placeholder="رمز عبور خود را مجدد وارد نمایید" name="psw-repeat"
                               required/>
                    </label>

                    <p>برای ساخت حساب کاربری باید قوانین را قبول کنید <a href="#">قوانین ما</a>.</p>

                    <div className="clearfix-form-tag">
                        <button type="button" className="cancelbtn-tag">بزن بریم صفحه ورود</button>
                        <button type="submit" className="signupbtn-tag">ثبت نام</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;