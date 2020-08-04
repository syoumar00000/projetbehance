import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Features from './pages/Features';
import Error from './pages/Error';
import Navbar from './component/Navbar';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
   
    <Navbar/>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Portfolio" component= {Portfolio} />
      <Route exact path="/Features" component={Features }/>
      <Route exact path="/Blog" component={Blog}/>
      <Route exact path="/Shop" component={Shop} />
      <Route exact path="/Contact" component={Contact}/>
      <Route component={Error} />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
