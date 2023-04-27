import { Provider } from "react-redux";
import "./App.css";
import DesktopView from "./components/DesktopComponents/DesktopView";
import MobileView from "./components/MobileComponents/MobileView";
import store from "./redux-toolkit/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MobileView />
        <DesktopView />
      </div>
    </Provider>
  );
}

export default App;
