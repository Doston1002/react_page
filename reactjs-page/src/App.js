import React from 'react';
import CategoriesSec from './homePage/CategoriesSec';
import Nav from './homePage/Nav';
import Home from './homePage/Home';
import '../src/styles/main.scss';
import '../src/styles/responsive.scss';
import SmartWatch from './recommended/SmartWatch';
import Ads from './ads/Ads';
import NewCollec from './newcollection/NewCollec';
import Trending from './trend/Trending';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatch />
      <Ads />
      <NewCollec />
      <Ads />
      <Trending />
      <Ads />
      <Footer />
    </>
  );
}

export default App;
