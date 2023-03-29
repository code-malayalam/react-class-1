import React from 'react'
import './App.css';
import Header from './Header/Header';
import './font.css'
import SellerItems from './categories/SellerItems';
import Component from './categories/SellerItems';
import DiscoverItems from './categories/DiscoverItems';
import Categories from './categories/Categories';
import Footer from './footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
  