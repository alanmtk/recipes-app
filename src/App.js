import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Ranking from './pages/Ranking';

function App() {
  return (
    <div className="App">
      <h1>Recetario</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recetas/:id">
          <Recipe />
        </Route>
        <Route path="/ranking">
          <Ranking />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
