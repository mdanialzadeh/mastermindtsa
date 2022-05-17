import "./Styles/Styles.css";
import { RecoilRoot } from "recoil";
import ScreenController from "./ScreenController";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="gameBoard">
          <ScreenController />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
