import {useEffect, useRef, useState} from 'react';

function useFetch(url, options = {}, method = 'GET') {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const isMounted = useRef(true);

    const fetchApi = async () => {
        try {
            const newUrl = typeof url === "string" ? url : url();
            const fetchOptions = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...options
            };

            const response = await fetch(newUrl, fetchOptions);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            if (response.status === 204) {
                setData(null);
            } else {
                const json = await response.json();
                setData(json);
            }
        } catch (err) {
            setError(err);
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (method === 'GET' && url) {
            void fetchApi();
        }
        return () => {
            isMounted.current = false;
        };
    }, [url, options, method]);

    return {
        data,
        isLoading: loading,
        error,
        isError,
        fetchApi
    };
}

export default useFetch;
