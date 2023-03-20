import React, { useState, useEffect } from 'react';
import './App.css';
import CreateNav from './Components/Nav';
// import './style.css'
import { GenerateFooter } from './Components/Footer';
import { AboutEtsy } from './Components/About';
import Script from './Components/script';
import { Abcd } from './Components/categories';
import NavItems from './Components/script';
import DiscoverItems from './Components/Discover';
function App() {
  return (
    <div className="App">
      <CreateNav></CreateNav>
      <Abcd/>
      {/* <Script/> */}
      <NavItems />
      <DiscoverItems />
      <AboutEtsy/>
      <GenerateFooter/>
    </div>
  );
}

export default App;
