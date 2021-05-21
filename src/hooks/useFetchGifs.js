import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (categories) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categories)
            .then(img => {

                setState({
                    data: img,
                    loading: false
                })

            })
    }, [categories])

    return state;
}

export default useFetchGifs
