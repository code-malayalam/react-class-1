import React, { useState, useEffect } from 'react';
import './App.css';
import CreateNav from './Components/Nav';
import { GenerateFooter } from './Components/Footer';
import { AboutEtsy } from './Components/About';
import DiscoverItems from './main/Discover';
import DealItems from './main/Deal';
import PopularItems from './main/Popular';
import FashionContainer from './main/Fashion';

function App() {
  return (
    <div className="App">
      <CreateNav></CreateNav>
      <DiscoverItems />
      <DealItems/>
      <PopularItems/>
      {/* <FashionContainer/> */}
      <AboutEtsy/>
      <GenerateFooter/>
    </div>
  );
}

export default App;
