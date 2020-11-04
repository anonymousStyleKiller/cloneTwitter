import React from 'react';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home/index";
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
          <div className="App">
              <Switch>
                  <Route path="/signin" component={  SignIn} />
                  <Route path="/" component={  Home} />
              </Switch>
          </div>
  );
}

export default App;
