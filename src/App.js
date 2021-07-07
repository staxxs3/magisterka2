import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebScrapper from './components/pages/WebScrapper'
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://localhost:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={WebScrapper} />
      </Switch>
    </Router>
  );
}

export default App;
