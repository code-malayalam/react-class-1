
import './App.css';
import LaptopItem from './LaptopItem';
import MobileItems from './MobileItems';


function App() {
  return (
    <>
    <div className="Mobile">
      <MobileItems />   
    </div>
    <div className='Laptop'>
    <LaptopItem />      
    </div>
    </>
  );
}

export default App;
