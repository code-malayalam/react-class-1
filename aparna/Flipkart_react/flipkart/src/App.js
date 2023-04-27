import './App.css';
import CreateHeader from './Components/Header';
import ScrollCategories from './Components/ScrollDiv';
import CarouselImages from './Components/Carousel';
import CreateCards from './Components/Cards';
import PopularPicks from './Components/PopularPicks';
import SummerCards from './Components/SummerCards';
import { Provider } from 'react-redux';
import store from './reducers/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <CreateHeader />
      <ScrollCategories />
      <div className='main-container'>
      <CarouselImages />
      <CreateCards />
      <PopularPicks />
      <SummerCards/>
      </div>
      </Provider>
    </div>
  );
}

export default App;
