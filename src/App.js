import React from "react";
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from "./components/Shared/Footer/Footer";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
