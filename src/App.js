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
import CounterWithRedux from "./Components/CounterWithReduxToolkit";
import ParentAndChildComponent from "./Components/ParentAndChildComponent";
import Infinite from "./Components/InfiniteScroll/Infinite";
import ModalContainer from "./Components/ModalContainer/ModalContainer";
import Tooltip from "./Components/Tooltip/Tooltip";
import TTT from "./Components/TTT";
import ApiFech from "./Components/ApiFech";
import StarRate1 from "./Components/StarRate1";
import Accordian2 from "./Components/Accordian2";

function App() {
  return (
    <div className="App">
      <div>
        <Tooltip content="Hover Me">
          <button>Hover Me</button>
        </Tooltip>
        <Accordian2></Accordian2>
        <StarRate1 />
        <ApiFech />
        <ModalContainer />
        <ParentAndChildComponent />
        <Accordion />
        <CounterWithRedux />
        <ProgressBar />
        <Counter />
        <CapsLockOnOff />
        <TicTacToe />
        <FetchApi />
        <Carousel />
        <StarRating />
        <ParentComponent />
        <TTT />
        <Infinite />
      </div>
    </div>
  );
}

export default App;
