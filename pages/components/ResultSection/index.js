import React, { Fragment, useCallback, useRef, useState, useEffect } from "react";
import styles from './listing.module.css';
import { APIKEY, BASEURL } from "../../api/api";

// shows the top 250 movies
import TopMovies from "./topMovies";

// component which paginating movie data
import PaginatedMovieData from "../../layout/Pagination";

const MovieSection = () => {
    const movieSearched = useRef(null);
    const [query, showResults] = useState([]);
    const [active, triggerListener] = useState(false);

    // this is the state that holds the movies returned from a movie search
    const [Search, setResults] = useState([]);

    const searchParam = (query) => `${BASEURL}/SearchAll/${APIKEY}/${query}`;

    const getQueryParam = useCallback((event) => {
        const query = event.target.value;
        showResults(query);
    })

    const onChange = useCallback((event) => {
        const query = document.querySelector('input').value;
        // console.log(query)

        if(query.length > 0){
            fetch(searchParam(query))
            .then(res => res.json())
            .then(res => {

                if(res.results.length > 0){
                    setResults(res.results);
                    console.log(res, res.Response, Search);
                }else{
                    setResults([])
                }
                
            })
        }
    }, []);

    const onFocus = useCallback(() => {
        triggerListener(true)
        window.addEventListener('button', onClick);
    }, []);

    const onClick = useCallback(() => {
        if(movieSearched.current && !movieSearched.current.contains(event.target)){
            triggerListener(false);
            window.removeEventListener('button', onClick);
        }
    }, []);
    

    
    
    return (
        <div className="horizontal-alignment">
            <div className={styles.searchInput} ref={movieSearched}>
                <label>Search Movies</label>
                <input className={styles.search} value={query} onChange={getQueryParam} onFocus={onFocus} placeholder="Search Movies"/>
                <button className={styles.searchBtn} onClick={onChange}>Search Movie</button>
            </div>



            { active && Search.length > 0 && (
                <Fragment>
                    <div className={styles.movieContainer}>
                        <PaginatedMovieData dataPaginated={Search} dataPerPage={12} />
                    </div>
                </Fragment>
            ) || (
                <TopMovies />
            )}
        </div>
    )
}

export default MovieSection;
