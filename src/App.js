import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import {
  Login,
  Timeline,
  Friends,
  Join,
} from './routes';
import { Header, Footer } from './layout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-content">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/friends" component={Friends} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
