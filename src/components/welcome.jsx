import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counters from './counters'
class Welcome extends Component{

  render(){
    return(
      <Router>
        <div>
          <h1>Welcome<h1>
          <Route path='/research' component={Counters}/>
        </div>
      </Router>
    )
  }
}
