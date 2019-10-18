import React from 'react';
import Header from './Components/Header/header'
import Wizard from './Components/Wizard/wizard'
import Dashboard from './Components/Dashboard/dashboard'
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes/routes';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header/>
      <div className = "background">
        <div className= 'routes'>
      {routes}
      </div>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
