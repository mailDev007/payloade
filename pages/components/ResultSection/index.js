import Link from "next/link";
import React, { Fragment, useCallback, useRef, useEffect, useState } from "react";
import styles from './listing.module.css';

const MovieSection = () => {
    const movieSearched = useRef(null);
    const [query, showResults] = useState([]);
    const [active, triggerListener] = useState(false);
    const [results, setResults] = useState([]);

    let allMovies = [];
    

    const searchParam = (query) => `http://www.omdbapi.com/?s=${query}&apikey=3f57fd83`;

    const onChange = useCallback((event) => {
        const query = event.target.value;
        showResults(query);

        if(query.length > 2){
            fetch(searchParam(query))
            .then(res => res.json())
            .then(res => {
                setResults(res.Search);

                allMovies = res.Search;
                console.log(results, allMovies, allMovies[0].Title);
            })
        }
    }, []);

    const onFocus = useCallback(() => {
        triggerListener(true)
        window.addEventListener('input', onInput);
    }, []);

    const onInput = useCallback(() => {
        if(movieSearched.current && !movieSearched.current.contains(event.target)){
            triggerListener(false);
            window.removeEventListener('input', onInput);
        }
    }, []);
    
    
    return (
        <div className="horizontal-alignment">
            <div className={styles.searchInput} ref={movieSearched}>
                <label>Search</label>
                <input className={styles.search} value={query} onChange={onChange} onFocus={onFocus}/>
            </div>


            { active && allMovies.length > 0 && (
                <Fragment>
                    <h4>Movie Category</h4>
                    <ul className={styles.movieSlider}>
                        {allMovies.map((row) => {
                            <li>
                                <img src={row.Poster}/>
                                <p>{row.Title}</p>
                            </li>
                        })}
                    </ul>
                </Fragment>
            )}
        </div>
    )
}

export default MovieSection;