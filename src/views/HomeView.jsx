import useFetch from "../hooks/useFetch.js";
import {apiUrl} from "../config.js";

const BACKED_URL = apiUrl;
function HomeView() {
    const {data} = useFetch( () =>  `${BACKED_URL}/categories`);

    //const {data} = useFetch( BACKED_URL); GET

    /**
     *    const { data , fetchApi} = useFetch( () => `${BACKED_URL}/categories`, {
     *         body: JSON.stringify({
     *             name: "Be",
     *             description: "Be Balahazo rika",
     *         }),
     *         headers: {
     *             'Content-Type': 'application/json'
     *         }},
     *         'POST' // mety hoe post na put na delete
     *     );
     *
     *     const  handleClick = async () => {
     *         await fetchApi()
     *     }
     */
    return (
        <div>
            {JSON.stringify(data)}

        </div>
    );
}

export default HomeView;