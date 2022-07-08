import { useEffect, useState } from "react"

export const useGet = (url: string) => {
    const [state, setState] = useState({ data: {}, loading: true })

    useEffect(() => {
        setState(state => ({ ...state, loading: true }))
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setState({ data, loading: false })
            })
    }, [url, setState])

    return state
}