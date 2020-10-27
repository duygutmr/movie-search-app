import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../store/actions' 
import Circle from '../svg/circle.svg'
import '../styles/HeroSection.scss'

function HeroSection() {
  const dispatch = useDispatch();

  useEffect(() =>  {
    dispatch(searchMovies("Frozen"));
  }, [dispatch])

  return (
    <section className="hero-section">
        <div className="hero-section__content">
          <img className="hero-section__content-icon" src={Circle} />
            <h1 className="hero-section__content-title">Welcome to</h1>
            <h1 className="hero-section__content-title-movie">MovieUP</h1>
            <p className="hero-section__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris </p>
        </div>
    </section>
)}
 
export default HeroSection;