import React from 'react';
import HeroSection from '../components/HeroSection'
import SearchContainer from '../components/SearchContainer'


function Home() {
  const searchContainerInlineStyle = { position: 'relative'}
  return (
    <>
      <HeroSection/>
      <SearchContainer style={searchContainerInlineStyle}/>
    </>
  );
}

export default Home;
