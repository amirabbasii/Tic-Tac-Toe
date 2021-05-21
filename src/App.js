import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Toolbar} from "@material-ui/core";
import {BrowserRouter as Router} from "react-router-dom";
class App extends Component {

  render() { 

    return(
    <Router>
    <div>
       <Navbar/>
       <Toolbar/> 
      <Main />
    </div>
    </Router>
    
      ) ;
  }
}
export default App;




