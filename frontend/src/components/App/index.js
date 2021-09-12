//import logo from './logo.svg';
import React from 'react';
import './style.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components :
import NavBar from '../Navbar';
import Footer from '../Footer';
//import Logo from '../../../public/logo_rcc.png';

const App = () => {
  return (
 <div className="App">
      <Router>
        <NavBar/>
        <main>
          <Switch>
            <Route exact path="/" component={NavBar}></Route>
            <Route exact path="/" component={Footer}></Route>
          </Switch>
        </main>
         <Footer/>
    </Router>
    </div>
  );
}

export default App;
