import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../styles/MovieDetails.scss'
import '../styles/MovieCard.scss'
import imdb from '../svg/imdb.svg'
import fav from '../svg/fav.svg'

function MovieDetails() {
    let { imdbId } = useParams();
    const [movie, setMovie] = useState({ Title: '', Genre: '', imdbRating: '', Poster: '', Year: '', Plot: '' })

    useEffect(() => {
        const loadData = async () => {
            const URL = `http://www.omdbapi.com?apikey=ad838839&i=${imdbId}&plot=short`
            const response = await fetch(URL);
            const data = await response.json();
            const { Title, Genre, imdbRating, Poster, Year, Plot } = data;
            setMovie({ Title, Genre, imdbRating, Poster, Year, Plot });
        }

        loadData();
    }, [imdbId]);


    return (
        <section className="container rating">
            <div className="movie__box-rating">
                <div className="movie__box-image">
                    <img className="movie__box-photo" src={movie.Poster} alt="movie poster" />
                </div>
                <div className="movie__box-content">
                    <h5>Rating</h5>
                    <div className="movie__box-imdb">
                        <img src={imdb} alt="imdb icon" />
                        <h3>{movie.imdbRating}</h3>
                        <div className="movie__box-right-btn">
                            <div className="movie__box-btn">
                                <button className="movie__box-btn-fav">
                                    <span><img src={fav} alt="favorite icon" /></span>
                            Add to favorites
                        </button>
                                <div className="movie__box-btn-add">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="movie__box-details">
                        <h3 className="movie__box-details-date">{movie.Year}</h3>
                        <h3>{movie.Title}</h3>
                        <p className="movie__box-details-text">{movie.Plot}</p>
                    </div>
                    <div className="movie__box-right-btn">
                        <button className="movie__box-right-btn-action">Action</button>
                        <button className="movie__box-right-btn-bio">Biography</button>
                        <button className="movie__box-right-btn-action">Action</button>
                        <button className="movie__box-right-btn-bio">Biography</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MovieDetails;
