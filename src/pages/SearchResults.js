import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MovieCardVertical from '../components/MovieCardVertical';
import BreadCrumb from '../components/Breadcrumb'
import SearchContainer from '../components/SearchContainer'
import '../styles/SearchResults.scss'

function SearchResults() {
  const movies = useSelector(state => state.getMovieReducer.movies)
  const searchContainerInlineStyle = { position: 'relative', top: '30px'}
  
  return (
    <Fragment>
      <BreadCrumb text="Search Results" />
      <SearchContainer style={searchContainerInlineStyle} />
      <div className="container movie__card-container">
        {movies.map(movie => <MovieCardVertical key={movie.imdbID} imdbId={movie.imdbID} />)}
      </div>
    </Fragment>
  );
}

export default SearchResults;
