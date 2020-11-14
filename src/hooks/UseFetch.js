import {useEffect, useState} from "react";
import axios from "axios";
import host from "../config/config";

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const sendRequest = async () => {
            const res = await axios.get(host + url)
            setData(res.data)
            setSuccess(true)
        }
        sendRequest()
        console.log(11111, data, success)
    }, [url])

    return {data, success}
}


export const UseFetchPost = (url, requestBody) => {
    const [data, setData] = useState([])
    const [success, setSuccess] = useState(false)


    const sendRequest = async () => {
        const res = await axios.post(host + url, {
            ...requestBody
        })
        setData(res.data)
        setSuccess(true)
    }
    sendRequest()
    console.log(11111, data, success)


    return {data, success}
}
