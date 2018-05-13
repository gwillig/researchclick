import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/welcome';
import Counters from './components/counters';


class App extends Component {
  "@description"
  render() {
    return (
    <Router>

          <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/research' component={Counters} />
          </Switch>

      </Router>
    );
  }
}

export default App;
