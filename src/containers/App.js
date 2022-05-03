import logo from "../assets/statics/logo.svg";
import "../assets/css/App.css";
import "../assets/css/HeaderX.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ruts from "../components/Ruts.js";
import Ruts2 from "../components/Ruts2.js";
import Ruts3 from "../components/Ruts3.js";
import Ruts4 from "../components/Ruts4.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Ruts />}></Route>
          <Route exact path="/Ruts2" element={<Ruts2 />}></Route>
          <Route exact path="/Ruts3" element={<Ruts3 />}></Route>
          <Route exact path="/Ruts4" element={<Ruts4 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
