import React, { useState, useEffect } from 'react';
import './App.css';
import CreateNav from './Components/Nav';
import { GenerateFooter } from './Components/Footer';
import { AboutEtsy } from './Components/About';
import NavItems from './Components/NavItems';
import DiscoverItems from './main/Discover';
import DealItems from './main/Deal';
import PopularItems from './main/Popular';
function App() {
  return (
    <div className="App">
      <CreateNav></CreateNav>
      {/* <NavItems /> */}
      <DiscoverItems />
      <DealItems/>
      <PopularItems/>
      <AboutEtsy/>
      <GenerateFooter/>
    </div>
  );
}

export default App;
