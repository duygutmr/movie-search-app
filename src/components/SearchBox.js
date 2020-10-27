import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { searchMovies } from '../store/actions' 
import search from '../svg/search.svg'
import '../styles/SearchBox.scss'

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchValue));
    history.push("/search-results");
  }

  return (
      <div className="search_box">
        <input value={searchValue} onChange={handleSearchInputChanges} className="search_box-input" type="text" placeholder="Enter movie name here"/>
        <img onClick={callSearchFunction} className="search_box-icon" src={search} alt="search"/>
      </div>
    );
}

export default SearchBox;