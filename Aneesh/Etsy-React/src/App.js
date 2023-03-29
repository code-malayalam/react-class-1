import './App.css';
import WebHeader from './components/header/WebHeader';
import './Fonts.css'
import MobileHeader from './components/header/MobileHeader';
import CategoryList from './components/header/categorylist/CatogoryList';
import Discover from './components/header/discoversection/Discover';
import Deals from './components/DealsSection/Deals';
import PopularGiftSection from './components/PopularGifts/PopularGiftsSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <MobileHeader />
      <WebHeader />
      <CategoryList />
      <Discover />
      <Deals />
      <PopularGiftSection />
      <Footer />
    </div>
  );
}

export default App;
