import React, {Component} from "react";
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'




class Statistic extends Component{
  /*@description
  @args
  */
  constructor(props) {
  super(props);
  this.state = {
    options: {
      chart: {
        type: "pie"
      },
      series: [{
          data: [1, 2, 3]
      }]
    }
  }
}

componentDidMount(){
  const component = this;
  fetch("./getdata/",
      {   mode: 'cors',
          method: "GET",
          User:"pkkgopklgiqakr",
          Password:"aeeb6c23db62634d7e9e70100fd72a009d1e7940da5de618dc75538f81daa9d5",
          headers: {
          'Content-Type': 'application/json',
          },
          contentType: 'application/json',
      })
      .then(function(data){
        // that.setState({data_dict.response});
        console.log(data);
        // that.setState(data_dict.response);
        component.setState({
          options: {
            series: [{
              data: data.pieChart
            }]
          }
        });


        // window.location.assign("www.google.de");
  })
}

render() {
  return (
    <div>
      <h2>Highcharts</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={this.state.options}
      />
    </div>
  );
}
}

export default Statistic;
