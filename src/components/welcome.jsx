import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Counters from './counters'

class Welcome extends Component{
  /*@description
    @args
    @return*/
    //// TODO: Add welcome page with instruction

    state = {
      countdown:60
    };
    start = counter => {
      const counters = this.state;
      console.log(counters)
      this.setState({countdown:counters.countdown--});
      if(counter.countdown >0){
        setTimeout(function(){
          document.querySelector("#countdown").style.display =""
          document.querySelector("#countdown").children[0].textContent = counter.countdown;

          counter.countdown = counter.countdown-10
          this.setState({counter})
          console.log("Hello")
        }, 1000);
      }
    }
      start1 = counter => {
        /*@description:
        Is resposible for the countdown on welcome
          @args
            counter(int): is the time for count on the website
          @return*/
          //// TODO: Add welcome page with instruction
        if(counter.countdown >0){
          setTimeout(function(){
            document.querySelector("#countdown").style.display =""
            document.querySelector("#countdown").children[0].textContent = counter.countdown;

            counter.countdown = counter.countdown-10
            this.setState({counter})
            console.log("Hello")
          }, 1000);
        }
    }


  render(){
    return(
      <div>
          <p>
            Hello participant,<br/>
            The survey should only take <b>40</b> seconds, and your responses are completely anonymous. <br/>
            If you have any questions about the survey, please email us: gustavwillig@gmail.com <br/>
            We really appreciate your input! <br/>
          </p>
        <Link to={'/research'}><p  onClick={this.start}>Start</p></Link>
      </div>
    )
  }
}

export default Welcome;
