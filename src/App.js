import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Welcome from './components/welcome';
import Counters from './components/counters';
import Statistic from './components/statistics';


class App extends Component {
  /*@description
    @args
    @return*/
  state={
    countdown:25
  }

  render() {
    return (
    <Router>

          <Switch>
              <Route exact path='/'
               render={() => <Welcome countdown ={this.state.countdown} />}
              />
              <Route exact path='/research'
               render={() => <Counters countdown ={this.state.countdown} />}
              />
              <Route exact path='/statistic' component={Statistic} />
          </Switch>

      </Router>
    );
  }
}

export default App;
