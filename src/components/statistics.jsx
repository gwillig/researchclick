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
  getdata(){
    let data;
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
          data = data;
          console.log(data);
          alert( "Thanks for your help and have a nice day." );
          // window.location.assign("www.google.de");
    })
    return data
}

  render(){
    return(
      <div>
        <h2>Statistics</h2>
        <Link to={'/research'}>Back</Link>
      </div>
    )
  }
}

export default Statistic;
