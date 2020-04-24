import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from './Home';
import Form from './Form';


function App() {
    return(
        <Router>
          {/* A <Switch> revisa entre las <Route>s y renderiza el primero que coincida */}
          <Switch>
            <Route path="/contacto">
              <Form />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    )
}

export default App;