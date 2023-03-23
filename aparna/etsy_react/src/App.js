import React, { useState, useEffect } from 'react';
import './App.css';
import CreateNav from './Components/Nav';
import { GenerateFooter } from './Components/Footer';
import { AboutEtsy } from './Components/About';
import DiscoverItems from './main/Discover';
import DealItems from './main/Deal';
import PopularItems from './main/Popular';
// import CommunityItems from './Components/Community';

function App() {
  return (
    <div className="App">
      <CreateNav></CreateNav>
      <DiscoverItems />
      <DealItems/>
      <PopularItems/>
      <AboutEtsy/>
     {/* <CommunityItems/> */}
      <GenerateFooter/>
    </div>
  );
}

export default App;
