import styles from './movie.module.css';

const SingleMovie = ({singlemovie}) => {
    const myMovie = new Array(singlemovie);

    console.log(myMovie);
    
    return(
        <div>
            <button onClick={() => history.go(-1)} className="default-button cursor-pointer horizontal-alignment">Go Back</button>
            <div className={styles.contentCenter}>
                <img src={myMovie[0].Poster}/>
                <div className={styles.movieDetail}>
                    <div>
                        Title: <h4>{myMovie[0].Title}</h4>
                    </div>
                    <div>
                        Year: <h4>{myMovie[0].Year}</h4>
                    </div>
                    <div>
                        Actors: <h4>{myMovie[0].Actors}</h4>
                    </div>
                    <div>
                        Genre: <h4>{myMovie[0].Genre}</h4>
                    </div>
                    <div>
                        Language: <h4>{myMovie[0].Language}</h4>
                    </div>
                    <div>
                        Released: <h4>{myMovie[0].Released}</h4>
                    </div>
                    <div>
                        Plot: <h4>{myMovie[0].Plot}</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SingleMovie;
  
  // This gets called on every request
  export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`https://www.omdbapi.com/?i=${context.query.movieid}&apikey=3f57fd83`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { 
        props: { 
            singlemovie: data,
        } 
    }
  }  
