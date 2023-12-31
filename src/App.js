import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Accordion from "./Components/Accordian";
import Counter from "./Components/Counter";
import FetchApi from "./Components/FetchApi";
import CapsLockOnOff from "./Components/CapsLockOnOff";
import ParentComponent from "./Components/ChildToParent";
import StarRating from "./Components/StarRating";
import ProgressBar from "./Components/ProgressBar/ProgressBar";
import TicTacToe from "./Components/TicTacToe/TicTacToe";

function App() {
  return (
    <div className="App">
      <div>
        <Accordion />
        <ProgressBar />
        <Counter />
        <CapsLockOnOff />
        <TicTacToe />
        <FetchApi />
        <Carousel />
        <StarRating />
        <ParentComponent />
      </div>
    </div>
  );
}

export default App;
