import React, {Component} from "react";
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}
const App = () => <div>
  <HighchartsReact
    highcharts={HighchartsReact}
    options={options}
  />
</div>

class Statistic extends Component{
  /*@description
  @args
  */
  render(){
    return(
      <div>
        <h2>Statistics</h2>
        <Link to={'/research'} >Start</Link>
      </div>
    )
  }
}

export default Statistic;
