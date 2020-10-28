import React, {useEffect, useState} from 'react';
import '../styles/MovieCard.scss'
import imdb from '../svg/imdb.svg'
import fav from '../svg/fav.svg'
import { setFavorites } from '../store/actions'
import { useDispatch } from 'react-redux';

function MovieCard({imdbId}) {
  const [movie, setMovie] = useState({Title: '', Genre: '', imdbRating: '', Poster: '', Year: '', Plot: ''})
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      const URL = `https://www.omdbapi.com?apikey=ad838839&i=${imdbId}&plot=short`
      const response = await fetch(URL);
      const data = await response.json();
      const {Title, Genre, imdbRating, Poster, Year, Plot} = data;
      setMovie({Title, Genre, imdbRating, Poster, Year, Plot});
    } 

    loadData();
  }, [imdbId]);

  const addToFavorites = () => {
    
    dispatch(setFavorites(imdbId)); 
  }

  return (
    <div className="movie__box">
      <div className="movie__box-image">
          <img className="movie__box-photo" src={movie.Poster} alt="movie poster"/>
      </div>
      <div className="movie__box-content">
          <div className="movie__box-imdb">
              <img src={imdb} alt="imdb icon"/>
              <h3>{movie.imdbRating}</h3>
              <div className="movie__box-right-btn">
                  <button className="movie__box-right-btn-action">Action</button>
                  <button className="movie__box-right-btn-bio">Biography</button>
              </div>
          </div>
          <div className="movie__box-details">
              <h3 className="movie__box-details-date">{movie.Year}</h3>
              <h3>{movie.title}</h3>
              <p className="movie__box-details-text">{movie.Plot}</p>
          </div>
          <div className="movie__box-btn">
              <button onClick={addToFavorites} className="movie__box-btn-fav">
                  <span><img src={fav} alt="favorite icon"/></span>
                  Add to favorites
              </button>
              <a className="movie__box-btn-link" href="/movie-details">View Details</a>
          </div>
      </div>
    </div>
  )
}
 
export default MovieCard;