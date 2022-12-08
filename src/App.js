import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,originals,trending,upcoming,topRated } from './urls'
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={trending} title='Trending Now' isSmall />
      <RowPost url={upcoming} title='Upcoming' isSmall />
      <RowPost url={topRated} title='topRated' isSmall />
     
    </div>
  );
}

export default App;
