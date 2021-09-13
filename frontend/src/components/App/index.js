//import logo from './logo.svg';
import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components :
import Header from '../Header/Header.js';
import Footer from '../Footer';
//import Logo from '../../../public/logo_rcc.png';

const App = () => {
  return (
 <div className="App">
      <Router>
        <Header/>
        <main>
          <Switch>
       
            <Route exact path="/" component={Footer}></Route>
          </Switch>
        </main>
         <Footer/>
    </Router>
    </div>
  );
}

export default App;
