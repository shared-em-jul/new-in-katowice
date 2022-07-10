import React from "react";
import Menu from './components/Menu';
import Article from './components/Article';
import HomePage from './components/HomePage';
import { Router, Link, Location } from "@reach/router"

const App: React.FC = () => {
return (
    <div className="App">
              <Menu/>
         <div>
              <Router>
                <Article path="/article" />
                <HomePage path="/" />
              </Router>
         </div>
    </div>
)}

export default App;
