import React from 'react';
import '../styles/SearchContainer.scss'
import arrow from '../svg/arrow.svg'
import arrowRight from '../svg/arrow-right.svg'
import SearchBox from './SearchBox'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../store/actions' 

function SearchContainer({style}) {
  const dispatch = useDispatch();
  let history = useHistory();
  const searchValue = useSelector(state => state.searchMovies.searchField)

  const callSearchFunction = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchValue));
    history.push("/search-results");
  }

  return (
    <section className="section__options">
        <div className="section__options-inline" style={style}>
            <div className="section__options-inline-inputs">
                <input className="section__options-year" placeholder="Year" />
                <img className="section__options-icon" src={arrow} alt="arrow icon"/>

                <input className="section__options-type" placeholder="Type" />
                <img className="section__options-icon" src={arrow} alt="arrow icon"/>
            </div>
            <SearchBox callSearchFunction={callSearchFunction} />
            <button onClick={callSearchFunction} className="section__options-btn">Search
                <img className="section__options-btn-arrow" src={arrowRight} alt="right arrow icon"/>
            </button>
        </div>
    </section>
)}
 
export default SearchContainer;