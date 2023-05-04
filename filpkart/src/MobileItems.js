
import './MobileItems.css';
import BestOffer from './components/BestOffer';
import Carousel from './components/Carousel';
import ItemCardContainer from './components/ItemCardContainer';
import MostSearch from './components/MostSearched';
import MovingNav from './components/MovingNav';
import Suggestion from './components/Suggestion';
import TotalHeader from './components/TotalHeader';


function MobileItems() {
  return (
    <div className="mobile-items">
      <TotalHeader />
      <MovingNav />
      <Carousel />      
      <MostSearch />
      <Suggestion />  
      <ItemCardContainer />
      <BestOffer/>
    </div>
  );
}

export default MobileItems;
