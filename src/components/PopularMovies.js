import React, { useEffect, useState } from 'react';
import '../styles/PopularMovies.scss'
import { useSelector, useDispatch } from 'react-redux';
import arrowRightYellow from '../svg/arrow-right-yellow.svg'
import imdb from '../svg/imdb.svg'
import fav from '../svg/fav.svg'
import favYellow from '../svg/fav-yellow.svg'

function MovieCard({ imdbId }) {
    const [movie, setMovie] = useState({ Title: '', Genre: '', imdbRating: '', Poster: '', Year: '', Plot: '' })
    const dispatch = useDispatch();

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
        <section className="movie">
            <div className="movie__content">
                <h2 className="movie__content-title">Popular Movies</h2>
                <p className="movie__content-text">View More
                <span>
                        <img className="movie__content-arrow" src={arrowRightYellow} />
                    </span>
                </p>
            </div>
            <div className="movie__box-popular">
                <div className="movie__box-first">
                    <div className="movie__box-image">
                        <img className="movie__box-photo" src={movie.Poster} />
                    </div>


                    <div className="movie__box-content">
                        <div className="movie__box-imdb">
                            <img src={imdb} />
                            <h3>{movie.imdbRating}</h3>
                            <div className="movie__box-right-btn">
                                <button className="movie__box-right-btn-action">Action</button>
                                <button className="movie__box-right-btn-bio">Biography</button>
                            </div>

                        </div>
                        <div className="movie__box-details">
                            <h3 className="movie__box-details-date">{movie.Year}</h3>
                            <h3>{movie.Title}</h3>
                            <p className="movie__box-details-text">{movie.Plot}</p>
                        </div>

                        <div className="movie__box-btn">
                            <button className="movie__box-btn-fav">
                                <span><img src={fav} /></span>
                            Add to favorites
                        </button>
                           
                            <a className="movie__box-btn-link" href="#">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="movie__box-first">
                    <div className="movie__box-image">
                        <img className="movie__box-photo" src={movie.Poster} />
                    </div>


                    <div className="movie__box-content">
                        <div className="movie__box-imdb">
                            <img src={imdb} />
                            <h3>{movie.imdbRating}</h3>
                            <div className="movie__box-right-btn">
                                <button className="movie__box-right-btn-action">Action</button>
                                <button className="movie__box-right-btn-bio">Biography</button>
                            </div>

                        </div>
                        <div className="movie__box-details">
                            <h3 className="movie__box-details-date">{movie.Year}</h3>
                            <h3>{movie.Title}</h3>
                            <p className="movie__box-details-text">{movie.Plot}</p>
                        </div>

                        <div className="movie__box-btn">
                            <button className="movie__box-btn-fav">
                                <span><img src={fav} /></span>
                            Add to favorites
                        </button>
                            <a className="movie__box-btn-link" href="#">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="movie__box-first">
                    <div className="movie__box-image">
                        <img className="movie__box-photo" src={movie.Poster} />
                    </div>


                    <div className="movie__box-content">
                        <div className="movie__box-imdb">
                            <img src={imdb} />
                            <h3>{movie.imdbRating}</h3>
                            <div className="movie__box-right-btn">
                                <button className="movie__box-right-btn-action">Action</button>
                                <button className="movie__box-right-btn-bio">Biography</button>
                            </div>

                        </div>
                        <div className="movie__box-details">
                            <h3 className="movie__box-details-date">{movie.Year}</h3>
                            <h3>{movie.Title}</h3>
                            <p className="movie__box-details-text">{movie.Plot}</p>
                        </div>

                        <div className="movie__box-btn">
                            <button className="movie__box-btn-fav">
                                <span><img src={fav} /></span>
                            Add to favorites
                        </button>
                            <a className="movie__box-btn-link" href="#">View Details</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default MovieCard;