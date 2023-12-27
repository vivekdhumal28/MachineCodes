import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Accordion from "./Components/Accordian";
import Counter from "./Components/Counter";
import FetchApi from "./Components/FetchApi";
import CapsLockOnOff from "./Components/CapsLockOnOff";

function App() {
  return (
    <div className="App">
      <div>
        <Accordion />
        <Counter />
        <CapsLockOnOff />
        <FetchApi />
        <Carousel />
      </div>
    </div>
  );
}

export default App;
