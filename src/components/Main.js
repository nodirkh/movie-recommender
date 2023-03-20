import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../requests"

const Main = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.url, {
            headers: "Content-type: application/json",
            data: requests.drama
        }).then((res) => {
            setMovies(res.data)
        })
    }, [])
    console.log(movies)
    return (
        <div>Main</div>
    )
}

export default Main