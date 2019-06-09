import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counters from './counters'

class Welcome extends Component{
  /*@description
    @args
    @return*/
    //// TODO: Add welcome page with instruction

  render(){
    return(
      <div>
          <p>
            Hello participant,<br/>
            The survey should only take <b>{this.props.countdown}</b> seconds, and your responses are completely anonymous. <br/>
            If you have any questions about the survey, please email us: gustavwillig@gmail.com <br/>
            We really appreciate your input! <br/>
          </p>
        <Link to={'/research'}><p>Start</p></Link>
      </div>
    )
  }
}

export default Welcome;
