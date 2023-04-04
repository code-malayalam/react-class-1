import './App.css';
import CreateHeader from './Components/Header';
import ScrollCategories from './Components/ScrollDiv';
import CarouselImages from './Components/Carousel';
import CreateCards from './Components/Cards';
import PopularPicks from './Components/PopularPicks';

function App() {
  return (
    <div className="App">
      <CreateHeader />
      <ScrollCategories />
      <div className='main-container'>
      <CarouselImages />
      <CreateCards />
      <PopularPicks />
      </div>
    </div>
  );
}

export default App;
