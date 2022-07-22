import { useRouter } from "next/router";

const SingleMovie = () => {

    const router = useRouter();

    let movieid = router.query.movieid;

    console.log(movieid);
    return (
        <div>
            Single Movie Detail
        </div>
    )
}

export default SingleMovie;