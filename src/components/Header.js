import React from 'react';
import '../styles/Header.scss';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../store/actions' 

import SearchBox from './SearchBox'
import logo from '../svg/logo.svg'

function Header() {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.searchMovies.searchField)
  let history = useHistory();

  const callSearchFunction = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchValue));
    history.push("/search-results");
  }

  return (
    <div className="container">
      <header className="header">
        <NavLink className="logo-wrapper" exact to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <nav className="nav">
          <ul className="nav__unordered">
            <NavLink exact to="/">
              <li className="nav__unordered-list-1">Home</li>
            </NavLink>
            <NavLink to="/favorites">
              <li className="nav__unordered-list-2">Favorite</li>
            </NavLink>
          </ul>
        </nav>
        <SearchBox callSearchFunction={callSearchFunction}/>
      </header>
    </div>

  )
}

export default Header;