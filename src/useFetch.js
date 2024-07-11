import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null)
    const [isLoaded, setLoaded] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url).then((res) => {
                if(res.ok !== true){
                    throw Error('Could not fetch data from this resource')
                }
            return res.json()
            }).then((data) => {
                setData(data);
                setLoaded(false);
                setError(null)
            }).catch((error) => {
                setError(error)
                setLoaded(false)
            })
        }, 1000)
    }, []);


    return {data, isLoaded, error}
}

export default useFetch;