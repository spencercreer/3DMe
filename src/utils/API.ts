import { useEffect, useState } from "react";
import { PlanetResponse } from "./types";

export const useGet = (url: string) => {
    const [response, setResponse] = useState<PlanetResponse>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data: PlanetResponse) => {
                setResponse(data)
                setLoading(false)
            })
    }, [url, setResponse])

    return { response, loading }
}