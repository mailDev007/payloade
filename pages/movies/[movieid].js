import React from 'react';
import styles from './movie.module.css';
import { useRouter } from 'next/router'
// get the apikey and the baseurl
import { APIKEY, BASEURL } from "../api/api";

const SingleMovie = ({singlemovie}) => {
    const router = useRouter();
    const myMovie = new Array(singlemovie);

    return(
        <div>
            <button onClick={() => location.assign('/')} className="default-button cursor-pointer horizontal-alignment">Go Back</button>
            <div className={styles.contentCenter}>
                <img src={myMovie[0].image}/>
                <div className={styles.movieDetail}>
                    <div>
                        <h1>{myMovie[0].title}</h1>
                    </div>
                    <div>
                        <p>{myMovie[0].plot}</p>
                    </div>
                    <div>
                        Genres: <em>{myMovie[0].genres}</em>
                    </div>
                    <div>
                        <h4>Release Date: {myMovie[0].releaseDate}</h4>
                    </div>
                </div>
            </div>
            <div className={styles.castSection}>    
                <h1>Casts</h1>
                {(myMovie[0].actorList).map((row) => {
                    return(
                        <div key={row.id} className={styles.castThumbnail}>
                            <img src={row.image} alt=""/>
                            <p title={row.asCharacter}>{row.asCharacter}</p>
                            <p title={row.name}>{row.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

// export the singleMovie method containing the JSX single movie data
export default SingleMovie;
  
// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`${BASEURL}/Title/${APIKEY}/${context.query.movieid}`)
    const data = await res.json()

    // Pass the returned data to the singleMovie method as a property
    return { 
        props: { 
            singlemovie: data,
        } 
    }
}
