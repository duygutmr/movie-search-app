import React, { Fragment } from 'react';
import MovieCardVertical from '../components/MovieCardVertical';
import { getInLocal} from '../utils/localStorage'
import BreadCrumb from '../components/Breadcrumb'
import '../styles/SearchResults.scss'

function Favorites() {
  const imdbIds = getInLocal("imdbIds");
  
  return (
    <Fragment>
      <BreadCrumb text="Favorites" />
      <div className="container movie__card-container">
        {imdbIds.map(id => <MovieCardVertical key={id} imdbId={id} />)}
      </div>
    </Fragment>
  );
}

export default Favorites;
