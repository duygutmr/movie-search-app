import React from 'react';
import HeroSection from '../components/HeroSection'
import SearchContainer from '../components/SearchContainer'
import PopularMovies from '../components/PopularMovies'


function Home() {
  const searchContainerInlineStyle = { position: 'absolute'}
  return (
    <>
      <HeroSection/>
      <SearchContainer style={searchContainerInlineStyle}/>
      <PopularMovies/>
    </>
  );
}

export default Home;
