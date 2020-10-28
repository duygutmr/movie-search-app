import React from "react";
import search from '../svg/search.svg'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchField } from '../store/actions' 
import '../styles/SearchBox.scss'

const SearchBox = ({callSearchFunction}) => {
  const searchValue = useSelector(state => state.searchMovies.searchField)
  const dispatch = useDispatch();

  const handleSearchInputChanges = (e) => {
    dispatch(setSearchField(e.target.value));
  }

  return (
      <div className="search_box">
        <input value={searchValue} onChange={handleSearchInputChanges} className="search_box-input" type="text" placeholder="Enter movie name here"/>
        <img onClick={(e) => callSearchFunction(e)} className="search_box-icon" src={search} alt="search"/>
      </div>
    );
}

export default SearchBox;