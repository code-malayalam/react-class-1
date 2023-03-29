import logo from './logo.svg';
import './App.css';
import './styles.css';

import Header from './Component/Header';
import Footer from './Component/Footer';
import TopNav from './Component/TopNav';
import MainHeading from './Component/MainHeading';
import DealOfDay from './Component/DealOfDay';
import PopularGiftNow from './Component/PopularGiftNow';
import MovingItems from './Component/MovingItems';
import Filter from './Component/Filter';



function App() {
  return (
   <div className='App'>
   <Header />
    <TopNav />
    <MainHeading />
    <DealOfDay />
    <PopularGiftNow />
    <MovingItems />
   <Footer />
 
  
   </div>
  );
}

export default App;
