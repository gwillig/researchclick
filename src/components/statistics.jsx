import React, {Component} from "react";
import { render } from 'react-dom'
import Highcharts from 'highcharts'
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
    highcharts={Highcharts}
    options={options}
  />
</div>

class Statistic extends Component{
  /*@description
  @args
  */
render(){
  return(<App />, document.getElementById('root'))}
}

export default Statistic;
