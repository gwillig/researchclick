import React, {Component} from "react";
import { render } from 'react-dom'

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

      </div>
    )
  }
}

export default Statistic;
