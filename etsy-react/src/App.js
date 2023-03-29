import './App.css';
import  Header  from './Components/Header';
import Footer from './Components/Footer';
import Discover from './Components/Discover';
import Deals from './Components/Deals';
import Blog from './Components/Blog';
import Gifts from './Components/gift';
import Selection from './Components/Selection';

function App() {
  return (
    <div className="App">
      <Header />
      <Discover />
      <Deals />
      <Gifts />
      <Selection />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
