import React, { useState } from "react";
import styles from '../components/ResultSection/listing.module.css';
import page from './pagination.module.css';
import ReactPaginate from 'react-paginate';
import {useRouter} from "next/router";

const PaginatedMovieData = ({dataPaginated, dataPerPage}) => {
    const [pageNumber, setPageNumber] = useState(0);

    const visitedPages = pageNumber * dataPerPage;

    // determine how many pages will be on the pagination
    const pageCount = Math.ceil(dataPaginated.length / dataPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    // send user to the single movie page
    const router = useRouter();
    const redirect = (row) => {
        router.push(`/movies/${row}`);
    }

    const showAllMovies = dataPaginated
        .slice(visitedPages, visitedPages + dataPerPage)
        .map((row) => {
            return(
                <div key={row.id} onClick={() => redirect(row.id)} className={styles.movieThumbnail}>
                    <img src={row.image} alt="" />
                    <p title={row.title}>{row.title}</p>
                </div>
            );
        });
        
        return(
            <div>
                {showAllMovies}
                <ReactPaginate 
                    previousLabel = {"Previous"}
                    nextLabel = {"Next"}
                    pageCount = {pageCount}
                    onPageChange = {changePage}
                    containerClassName={page.paginationButtons}
                    previousLinkClassName={page.prevnextBtns}
                    nextLinkClassName={page.prevnextBtns}
                    disabledClassName={page.disabledButtons}
                    activeClassName={page.activePage}
                />
            </div>
        )
}

export default PaginatedMovieData