//import logo from './logo.svg';
import React from 'react';
import './style.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components :
import NavBar from '../NavBar';
import Footer from '../Footer';

const App = () => {
  return (
 <div className="App">
    <Router>
        <main>
          <Switch>
            <Route exact path="/" component={NavBar}></Route>
            <Route exact path="/" component={Footer}></Route>
          </Switch>
        </main>
    </Router>
    </div>
  );
}

export default App;
