import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';

const title = 'SPA - LeaderBoard';

function App() {
  return (
    <Router>
      <div className='App'>
        <h8k-navbar header={title}></h8k-navbar>
        <Switch>
          <Route exact path='/'>
            <LeaderBoard />
          </Route>
          <Route path='/rank'>
            <LeaderBoard />
          </Route>
          <Route path='/name'>
            <LeaderBoard />
          </Route>
          <Route path='/points'>
            <LeaderBoard />
          </Route>
          <Route path='/age'>
            <LeaderBoard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
