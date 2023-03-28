import "./App.css";
import "./styles.css";
import Category from "./components/Category";
import Header from "./components/Header";
import Discover from "./components/Discover";
import Deals from "./components/Deals";
import Popular from "./components/Popular";
import Valentine from "./components/Valentine";
import Selection from "./components/Selections";
import Overview from "./components/Overview";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Category />
      <Discover />
      <Deals />
      <Popular />
      <Valentine />
      <Selection />
      <Overview />
      <Footer />
    </div>
  );
}

export default App;
