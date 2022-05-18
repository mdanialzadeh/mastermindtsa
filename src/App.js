import "./Styles/Styles.css";
import { RecoilRoot } from "recoil";
import ScreenController from "./ScreenController";
import Player from "./Player";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="gameBoard">
          <ScreenController />
        </div>
        <Player />
      </div>
    </RecoilRoot>
  );
}

export default App;
