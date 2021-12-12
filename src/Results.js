import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard.js'
import "./Results.css"
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie, idx) => {
                    return <VideoCard movie={movie} key={movie.id || idx} />
                })}
            </FlipMove>
        </div>
    )
}

export default Results
