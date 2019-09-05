import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Albums from './components/Albums';
import Songs from './components/Songs';
import Artists from './components/Artists';
import Player from './components/Player';
import Genres from './components/Genres';

function App() {
  return (      
    <React.Fragment>
      <div className="homeButton">
        <a href="/"><img src="https://image.flaticon.com/icons/png/512/59/59763.png" alt=""></img></a>
      </div>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/genres" component={Genres}/>
        <Route exact path="/artists" component={Artists}/>
        <Route exact path="/artists/:id/albums" component={Albums}/>
        <Route exact path="/albums/:id/songs" component={Songs}/>
        <Route exact path="/player" component={Player}/>
      </Router>      
    </React.Fragment>
  );
}

export default App;
