import React, {useContext, useState, useEffect} from 'react';
import './Login.css'
import {AuthContext} from "../../contexts/AuthContext";
import axios from "axios";
import host from "../../config/config";
import {UseFetchPost} from "../../hooks/UseFetch"


function Login(props) {

    const [phone_number, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    const [data, setData] = useState([])
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    const auth = useContext(AuthContext)


    const authSubmitHandler = (event) => {
        console.log("login")
        event.preventDefault()

        console.log(phone_number)
        console.log(password)


        const sendRequest = async () => {
            await axios.post(host + "token/", {
                phone_number, password
            }).then(response => {
                setData(response.data)
                setSuccess(true)
            }).catch(error => setError(error.response))
        }
        sendRequest()
        // console.log(11111, data, success)

        // const {data, success} = UseFetchPost("token", {phone_number, password})
        console.log(data)
        console.log(success)

        auth.login()
    }


    return (


        <form action="" method="post" className="form-login" onSubmit={authSubmitHandler}>
            <div className="imgcontainer">
                <h2>ورود</h2>
            </div>

            <div className="container">
                <label htmlFor="username"><b>شماره تلفن</b></label>
                <label>
                    <input type="text" placeholder="شماره تلفن خود را وارد نمایید" name="username" value={phone_number}
                           required
                           className="input-login" onChange={(event) => {
                        setPhoneNumber(event.target.value)
                    }}/>
                </label>

                <label htmlFor="psw"><b>رمز عبور</b></label>
                <label>
                    <input type="password" placeholder="رمز عبور خود را وارد نمایید" name="psw" value={password}
                           required
                           className="input-login" onChange={(event) => {
                        setPassword(event.target.value)
                    }}/>
                </label>

                <button type="submit" className="button-login">ورود</button>

            </div>

            <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                <button type="submit" className="cancelbtn button-login">بزن بریم صفحه ثبت نام</button>
            </div>
        </form>
    );
}

export default Login;