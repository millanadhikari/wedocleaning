import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from './Components/pages/Home';
import Services from './Components/pages/Services'
import ContactUs from './Components/pages/ContactUs'
import SignUp from './Components/pages/SignUp'
import EndOfLeaseClean from './Components/pages/EndOfLeaseClean'
import MouldClean from './Components/pages/MouldClean'
import BuildersClean from './Components/pages/BuildersClean'
import CarpetClean from './Components/pages/CarpetClean'
import Blogs from './Components/pages/Blogs'
import Book from './Components/pages/Book'
import Thankyou from './Components/pages/Thankyou'


function App() {
  return (
    <div className="app">
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/contact-us' exact component={ContactUs}/>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/End-of-lease-cleaning' exact component={EndOfLeaseClean}/>
        <Route path='/Builders-clean' exact component={BuildersClean}/>
        <Route path='/Carpet-cleaning' exact component={CarpetClean}/>
        <Route path='/Mould-clean' exact component={MouldClean}/>
        <Route path='/blogs' exact component={Blogs}/>
        <Route path='/bookonline' exact component={Book}/>
        <Route path='/thankyou' exact component={Thankyou}/>

      </Switch>
    </Router>
    </div>
  );

}

export default App;
