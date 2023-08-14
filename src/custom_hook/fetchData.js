import { useState, useEffect } from "react"; // useState sử dụng để lưu trữ là cập nhật bởi hook
import axios from "axios"; // là thư viện để fecth API

const useFetch = (url) => {
    const [data, setdata] = useState([]); // tạo ra bằng hook
    const [Loading, setLoading] = useState(true) // 
    const [ErrorMes, setErrorMes] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source() // <-- 1 step
        async function fetchData() {
            // You can await here
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token, //<-- 2 step
                });

                res = res && res.data && res.data ? res.data : []
                setdata((res))
                setLoading(false)
                setErrorMes(false)
            }
            catch (err) {
                if (axios.isCancel(err)) {
                    console.log("Request cancel", err.message)
                } else {
                    setErrorMes(true)
                    setLoading(false)
                }
            }
        }
        setTimeout(() => {
            fetchData();
        }, 1000);
        return () => {
            ourRequest.cancel('chiu thua')
        }
    }, [url])

    return {
        data, Loading, ErrorMes
    }

}
export default useFetch;