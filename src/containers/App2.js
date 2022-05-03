import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ruts from "../components/Ruts.js";
import Ruts2 from "../components/Ruts2.js";
import Ruts3 from "../components/Ruts3.js";
import Ruts4 from "../components/Ruts4.js";
import Layout from "../components/Layout.js";

function App2() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Ruts />}></Route>
            <Route exact path="/Ruts2" element={<Ruts2 />}></Route>
            <Route exact path="/Ruts3" element={<Ruts3 />}></Route>
            <Route exact path="/Ruts4" element={<Ruts4 />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App2;
