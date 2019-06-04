import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/welcome';
import Counters from './components/counters';
import Statistic from './components/statistics';


class App extends Component {
  /*@description
    @args
    @return*/
  render() {
    return (
    <Router>

          <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/research' component={Counters} />
              <Route path='/statistic' component={Statistic} />
          </Switch>

      </Router>
    );
  }
}

export default App;
