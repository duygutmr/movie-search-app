import React, { useEffect, useState } from 'react';
import '../styles/MovieCardVertical.scss'
import imdb from '../svg/imdb.svg'
import favRound from '../svg/fav-round.svg'
import favRoundFull from '../svg/fav-round-full.svg'
import { useDispatch } from 'react-redux';
import { setFavorites } from '../store/actions'
import { getInLocal} from '../utils/localStorage'
import {useHistory} from "react-router-dom";

function MovieCard({ imdbId }) {
    const [movie, setMovie] = useState({ Title: '', Genre: '', imdbRating: '', Poster: '', Year: '', Plot: '' })
    const dispatch = useDispatch();
    const imdbIds = getInLocal("imdbIds");
    let history = useHistory();

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

    const addToFavorites = (e) => {
        dispatch(setFavorites(imdbId)); 
        e.stopPropagation()
    }

    const isFavorited = () => {
        return imdbIds.includes(imdbId);
    }

    const goToDetails = () => {
        history.push(`/movie-details/${imdbId}`);
    }


    return (
        <div className="results" onClick={goToDetails}>
            <div className="results__box">
                <div className="results__box-image">
                    <img className="results__box-poster" src={movie.Poster} alt="movie poster" />
                    <button className="movie__box-right-btn-bio">Biography</button>
                    <span onClick={addToFavorites} className="results__box-icon"><img src={isFavorited() ? favRoundFull : favRound} alt="favorite icon" /> </span>
                </div>
                <div>
                    <div className="results__box-rate">
                        <img src={imdb} alt="imdb icon" />
                        <h3 className="results__box-score">{movie.imdbRating}</h3>
                    </div>
                    <h3 className="results__box-date">{movie.Year}</h3>
                    <h2>Be Your Self &amp; Never Su..</h2>
                    <p className="results__box-plot">{movie.Plot}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;