import React from "react";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CenterPanel";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <LeftPanel />
        <CenterPanel />
        <RightPanel />
      </div>
      <Footer />
    </div>
  );
}

export default App;