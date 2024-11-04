import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const MovieInfo = () => {
    const { movieId } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${movieId}?api_key=41ee00ef54c639e104c9b60ce5d3736b`
            )
            .then(function (response) {
                console.log(response);
                setData(response?.data);
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }, [movieId]);
    console.log(data);
    return (
        <>
            <h1>{data?.title}</h1>
            <img
                src={"https://image.tmdb.org/t/p/w500" + data?.poster_path}
                alt={`${data?.title} Poster`}
            />
        </>
    )
}

export default MovieInfo