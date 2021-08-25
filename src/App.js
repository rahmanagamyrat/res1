import React from "react";
import Navbar from "./Components/Navbar";
import Header from './Components/Header'
import Offer from './Components/Offer';
import Info from './Components/Info';
import Infos from './Components/Infos';
import Infosec from './Components/Infosec';
import Infonav from './Components/Infonav';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Offer />
      <Info />
      <Infos />
      <Infosec />
      <Infonav />
    </div>
  );
}

export default App;
