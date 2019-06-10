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
    pieChart:{
      options: {
      title: {
        text: 'Sum of differnt moods'
      },
      chart: {
        type: "pie",
        backgroundColor:'#f8f9fae8',
      },
      series: [{
          data: [1, 2, 3]
      }]
    }
  },
    lineChart:{
    options: {
    title: {
      text: 'Records per day'
    },
    chart: {
      type: "line",
      zoomType: 'x',
      backgroundColor:'#f8f9fae8',
    },
    xAxis: {
    type: 'datetime',
    },
    series: [{
        data: [
            [1557266400000.0, 6],
            [Date.UTC(1970, 11,  6), 0.25],
            [Date.UTC(1970, 11, 20), 1.41],
            [Date.UTC(1971, 11, 25), 1.64],
          ]
    }]
  }
},
colChart:{
options: {
title: {
  text: 'Records per day'
},
chart: {
  type: "column",
  zoomType: 'x',
  backgroundColor:'#f8f9fae8',
},
xAxis: {
type: 'datetime',
},
series: [{
    data: [
        [1557266400000.0, 6],
        [Date.UTC(1970, 11,  6), 0.25],
        [Date.UTC(1970, 11, 20), 1.41],
        [Date.UTC(1971, 11, 25), 1.64],
      ]
}]
}
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
          'Accept': 'application/json'
          },
          contentType: 'application/json',

      })
      .then(response => response.json())
      .then(function(data){
        // that.setState({data_dict.response});
        console.log(data);
        component.setState({
          pieChart:{options: {
            series: [{
              data: data.pieChart
            }]
          }},
          lineChart:{options: {
            series: [{
              data: data.lineChart
            }]
          }},
          colChart:{options: {
            series: [{
              data: data.colChart
            }]
          }}

        });
        // window.location.assign("www.google.de");
  })
      .catch(function(error) {
        console.log(error);
        let data = {"all_records": 29, "pieChart": [{"name": null, "y": 22}, {"name": "happy", "y": 3}, {"name": "None", "y": 3}, {"name": "angry", "y": 1}], "lineChart": [[1557266400000.0, 6], [1557525600000.0, 3], [1557612000000.0, 18], [1560031200000.0, 2]], "colChart": [[1557266400000.0, 6.0], [1557525600000.0, 9.0], [1557612000000.0, 27.0], [1560031200000.0, 29.0]]}
        component.setState({
          pieChart:{options: {
            series: [{
              data: data.pieChart
            }]
          }},
          lineChart:{options: {
            series: [{
              data: data.lineChart
            }]
          }},
          colChart:{options: {
            series: [{
              data: data.colChart
            }]
          }}

        });
      });
}

render() {
  return (
    <div>
      <h2>Highcharts</h2>
      <HighchartsReact
        highcharts={Highcharts}
        options={this.state.pieChart.options}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={this.state.lineChart.options}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={this.state.colChart.options}
      />
    </div>
  );
}
}

export default Statistic;
