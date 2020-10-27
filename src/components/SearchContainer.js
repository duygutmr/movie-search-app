import React from 'react';
import '../styles/SearchContainer.scss'
import arrow from '../svg/arrow.svg'
import arrowRight from '../svg/arrow-right.svg'
import SearchBox from './SearchBox'

function SearchContainer({style}) {
  return (
    <section className="section__options">
        <div className="section__options-inline" style={style}>
            <div className="section__options-inline-inputs">
                <input className="section__options-year" placeholder="Year" />
                <img className="section__options-icon" src={arrow} alt="arrow icon"/>

                <input className="section__options-type" placeholder="Type" />
                <img className="section__options-icon" src={arrow} alt="arrow icon"/>
            </div>
            <SearchBox />
            <button className="section__options-btn">Search
                <img className="section__options-btn-arrow" src={arrowRight} alt="right arrow icon"/>
            </button>
        </div>
    </section>
)}
 
export default SearchContainer;