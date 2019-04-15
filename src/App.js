import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Components/Travel";
import Travels from "./Components/Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenue sur Netlify
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Travel
          photo="https://static.amazon.jobs/locations/7/thumbnails/Paris_-_Thumbnail.jpg?1454183453"
          destination="Paris"
          country="France"
          distance="0 km"
        />
         <Travel
          photo="https://img.20mn.fr/wsRGK5ZQTuOBGkiSQZ_GKA/310x190_bordeaux-21-septembre-2011-le-miroir-d-eau-photo-sebastien-ortola.jpg"
          destination="Bordeaux"
          country="France"
          distance="582 km"
        />
        <Travels />
      </div>
    );
  }
}

export default App;
