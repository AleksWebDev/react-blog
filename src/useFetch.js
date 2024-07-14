import { useState, useEffect } from "react";

function useFetch(url, updateFlag) {

    const [data, setData] = useState(null)
    const [isLoaded, setLoaded] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

            const abortCont = new AbortController();

            setTimeout(() => {
                fetch(url, {signal: abortCont.signal}).then((res) => {
                    if (res.ok !== true){
                        throw Error('Could not fetch the data from this resource');
                    }
                    return res.json()
                }).then((data) => {
                    console.log(data);
                    setData(data)
                    setLoaded(false)
                    setError(null)
                }).catch((err)=>{
                    if(err.name === 'AbortError'){
                        console.log('Fetch is aborted')
                    }else{
                        setError(err.message)
                        setLoaded(false)
                    }
                })
            })

        return () => {
            console.log('unmounting');
            abortCont.abort();
        }

    }, [updateFlag])

    return {data, isLoaded, error}
}

export default useFetch;