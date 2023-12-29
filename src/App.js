import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Accordion from "./Components/Accordian";
import Counter from "./Components/Counter";
import FetchApi from "./Components/FetchApi";
import CapsLockOnOff from "./Components/CapsLockOnOff";
import ParentComponent from "./Components/ChildToParent";
import StarRating from "./Components/StarRating";

function App() {
  return (
    <div className="App">
      <div>
        <Accordion />
        <Counter />
        <CapsLockOnOff />
        <FetchApi />
        <Carousel />
        <StarRating />
        <ParentComponent />
      </div>
    </div>
  );
}

export default App;
