import './App.css';
import CardsDesktop from './components/CardsDesktop';
import Carousel from './components/Carousel';
import CarouselDeskTop from './components/CarouselDesktop';
import Header from './components/Header';
import NavDesktop from './components/NavDesktop';
import NavList from './components/NavList';
import OfferZone from './components/OfferZone';
import Suggested from './components/Suggested';
import { Provider } from 'react-redux';
import store from './reducers/store';


function App() {
  return (
    <Provider store={store}>
      <div className="flipkart">
        <Header />
        <NavList />
        <Carousel />
        <OfferZone />
        <Suggested />
        <div className='desktop_view'>
          <NavDesktop />
          <CarouselDeskTop />
          <CardsDesktop />
        </div>
      </div>
    </Provider>
  );
}

export default App;
