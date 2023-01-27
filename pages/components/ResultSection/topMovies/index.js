import React, { useState, useEffect } from "react";
import styles from '../listing.module.css';
import { useRouter } from 'next/router'
// get the apikey and the baseurl
import { APIKEY, BASEURL } from "../../../api/api";
// component which paginating movie data
import PaginatedMovieData from "../../../layout/Pagination";

const TopMovies = () => {
    const [alltopmovies, setTopMovies] = useState([]);
    const router = useRouter();

    const alltopfilms = () => `${BASEURL}/Top250Movies/${APIKEY}`;

    useEffect((event) => {

        fetch(alltopfilms())
        .then(res => res.json())
        .then(res => {
            setTopMovies(res.items);
        })
    }, []);
    
    
    return (
        <div>

            {/* <TopMovies /> */}


            { alltopmovies.length > 0 && (
                <div className={styles.movieContainer}>
                    <PaginatedMovieData dataPaginated={alltopmovies} dataPerPage={12} />
                </div>
            )}
        </div>
    )
}

export default TopMovies;