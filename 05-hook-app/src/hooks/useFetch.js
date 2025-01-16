import { useEffect, useState } from 'react'

const localCache = {}

const useFetch = ( url ) => {
    const [ state, setState] = useState({
       data: null,
       isLoading: true,
       hasError: false,
       error: false,
    });

    useEffect(( url ) => {
        getFetch(url);
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: false,
         });
    };

    const getFetch = async() => {

        // verifying if the url is in localCache
        if ( localCache[url] ) {
            console.log('Usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }

        setLoadingState();
        const response = await fetch(url);

        // simulate delay of the response
        // sleep
        await new Promise( resolve => setTimeout(resolve, 1500));

        if( !response.ok ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText,
                },
            });

            return;
        }

        const data = await response.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        });

        // saving data inside the cache
        localCache[url] = data;

        console.log(data);
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}

export default useFetch
