import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard.js'
import "./Results.css"
import axios from "./axios";
import requests from './requests.js';

function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [])

    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard movie={movie} />
            ))}
        </div>
    )
}

export default Results