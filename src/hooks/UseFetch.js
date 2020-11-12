import {useEffect, useState} from "react";
import axios from "axios";
import host from "../config/config";

const useFetch = (url) => {
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


export default useFetch