import Link from "next/link";
import { Fragment } from "react";
import styles from './listing.module.css';

const MovieSection = () => {
    return (
        <div className="horizontal-alignment">
            <div className={styles.searchInput}>
                <label>Search</label>
                <input className={styles.search}/>
            </div>
            <Fragment>
                <h4>Movie Category</h4>
                <ul className={styles.movieSlider}>
                    <li>
                        <img />
                        <p>Name of the Movie</p>
                        {/* <Link ></Link> */}
                    </li>
                    <li>
                        <img />
                        <p>Name of the Movie</p>
                        {/* <Link ></Link> */}
                    </li>
                    <li>
                        <img />
                        <p>Name of the Movie</p>
                        {/* <Link ></Link> */}
                    </li>
                    <li>
                        <img />
                        <p>Name of the Movie</p>
                        {/* <Link ></Link> */}
                    </li>
                </ul>
            </Fragment>
        </div>
    )
}

export default MovieSection;