import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counters from './counters'

class Welcome extends Component{
  /*@description
    @args
    @return*/
  render(){
    return(
      <div>
        <h2>Welcome</h2>
        <Link to={'/research'} >Start</Link>
      </div>
    )
  }
}

export default Welcome;
