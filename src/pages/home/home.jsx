import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ExampleImage from '../../assets/images/ironman.jpg'
import './main.scss'
import { MyContext } from '../../context/home-context';
import MainTable from '../../components/table/table';
import axios from 'axios';
import { Input } from 'antd';
function Home() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const [value, setValue] = useState("")

    const [searchData, setSearchData] = useState()

    console.log(value, 'value');
    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=41ee00ef54c639e104c9b60ce5d3736b`
            )
            .then(function (response) {
                console.log(response);
                setData(response?.data?.results);
                setLoading(false);
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/search/person?api_key=41ee00ef54c639e104c9b60ce5d3736b&query=${value}`
            )
            .then(function (response) {
                console.log(response, 'search');
                setSearchData(response?.data?.results);
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    }, [value]);


    return (
        <>

            <div className="search container">
                <Input onChange={(e) => setValue(e.target.value)} placeholder="Basic usage" />

                <div className="search-movies">
                    {
                        searchData?.map((i, k) => (
                            <div className="search-movie">
                                <p>{i.name}</p>
                                <img
                                    src={"https://image.tmdb.org/t/p/w500" + i?.profile_path}
                                    alt={`${i.title} Poster`}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="movies container">
                {
                    data?.map((item, key) => (
                        <Link to={`/movie/${item?.id}`} className="movie">
                            <h1>{item.title}</h1>
                                <img
                                    src={"https://image.tmdb.org/t/p/w500" + item?.backdrop_path}
                                    alt={`${item.title} Poster`}
                                />
                        </Link>
                    ))
                }
            </div>

        </>
    );
}

export default Home;


