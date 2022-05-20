import "./Styles/Styles.css";
import { RecoilRoot } from "recoil";

import ScreenController from "./ScreenController";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <ScreenController />
      </div>
    </RecoilRoot>
  );
}

export default App;
