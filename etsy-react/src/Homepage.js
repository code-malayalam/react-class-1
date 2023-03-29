import './Styles.css';
import Deals from './Homepage/Deals';
import PopularGifts from './Homepage/PopularGifts';
import ValentineDayGifts from './Homepage/ValentineGifts';
import Footer from './Homepage/Footer';
import Discover from './Homepage/Discover';
import Header from './Homepage/Header';
import NavList from './Homepage/NavList';

function Homepage() {
  return (
    <div className="App">
      <Header />
      <NavList />
      <Discover />
      <Deals />
      <PopularGifts />
      <ValentineDayGifts />
      <Footer />
    </div>
  );
}

export default Homepage;
