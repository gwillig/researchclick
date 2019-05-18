import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counters from './counters'

class Welcome extends Component{
  /*@description
    @args
    @return*/
    //// TODO: Add welcome page with instruction
    //// TODO: Add highchart.js: line chart shows the total amount of the participants
    //// TODO: Add highchart.js: bar chart shows the total amount of the participants for each time of day
    //// TODO: Add mean, median, std for each image
  render(){
    return(
      <div>
        <h2>Welcome</h2>
        <p>
          Hello participant,
          The survey should only take 40 seconds, and your responses are completely anonymous.
          If you have any questions about the survey, please email us: gustavwillig@gmail.com
          We really appreciate your input!
        </p>
        <Link to={'/research'} >Start</Link>
      </div>
    )
  }
}

export default Welcome;
