import React, { Fragment, useCallback, useRef, useState } from "react";
import styles from './listing.module.css';
import Router, {useRouter} from "next/router";

const MovieSection = () => {
    const movieSearched = useRef(null);
    const [query, showResults] = useState([]);
    const [active, triggerListener] = useState(false);
    const [Search, setResults] = useState([]);
    const router = useRouter();

    let allMovies = [];
    

    const searchParam = (query) => `https://www.omdbapi.com/?s=${query}&apikey=3f57fd83`;

    const onChange = useCallback((event) => {
        const query = event.target.value;
        showResults(query);

        if(query.length > 2){
            fetch(searchParam(query))
            .then(res => res.json())
            .then(res => {

                if(res.Response == 'True'){
                    setResults(res.Search);
                }else{
                    setResults([])
                }
                console.log(res.Search);
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

    const redirect = (row) => {
        router.push(`/movies/${row}`);
    }
    
    
    return (
        <div className="horizontal-alignment">
            <div className={styles.searchInput} ref={movieSearched}>
                <label>Search</label>
                <input className={styles.search} value={query} onChange={onChange} onFocus={onFocus}/>
            </div>


            { active && query.length > 2 && Search.length > 0 && (
                <Fragment>
                    <h4>Movie Category</h4>
                    <ul className={styles.movieSlider}>
                        {Search.map((row) => {
                            return(
                                <li key={row.imdbID} onClick={() => redirect(row.imdbID)}>
                                    <img src={row.Poster}/>
                                    <p>{row.Title}</p>
                                </li>
                            )
                        })}
                    </ul>
                </Fragment>
            )}
        </div>
    )
}

export default MovieSection;
