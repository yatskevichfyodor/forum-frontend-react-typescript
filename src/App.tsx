import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header/>
            <header className="App-header">
                <h1>HELLO WORLD</h1>
            </header>
        </div>
    );
  }
}

export default App;
