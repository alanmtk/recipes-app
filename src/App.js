import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore, StoreProvider } from 'easy-peasy';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Ranking from './pages/Ranking';
import model from './store/model';

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <div className="App">
          <div className="container">
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
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
