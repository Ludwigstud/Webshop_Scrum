import { useEffect, useState, useMemo } from 'react'
import { getAccessToken } from '../helpers/getAccessToken';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const authToken = getAccessToken();


    const headers = useMemo(() => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (authToken) {
            headers.append('Authorization', `Bearer ${authToken}`);
        }
        return headers;
    }, [authToken]);

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await fetch(url, {
                    method: "GET",
                    headers: headers,
                });

                if(!response.ok){
                    throw Error(`${response.status}: ${await response.text()}`);
                }
                const data = await response.json();
                setData(data);
            }
            catch(error) {
                setError(error.message);
            }
            finally{
                setIsLoading(false);
            }
        }
        getData();
    }, [url, headers])



  return{data, error, isLoading}
}

export default useFetch
