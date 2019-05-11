import React,{Component} from 'react';
import Counter from './counter'

// countinue 2:00:49
class Counters extends Component{
  state = {
    url:"https://picsum.photos/200/300/?random",
    counters:[
      {id:1,value:0,url:"https://source.unsplash.com/owFmHMC4QAI///300x300"},
      {id:2,value:0,url:"https://source.unsplash.com/7uoMmzPd2JA///300x300"},
      {id:3,value:0,url:"https://source.unsplash.com/Gv2t5q_LnwA///300x300"},
      {id:4,value:0,url:"https://source.unsplash.com/zBbY7VaUiqU///300x300"},
      {id:5,value:0,url:"https://source.unsplash.com/5INN0oj12u4///300x300"},
      {id:5,value:0,url:"https://source.unsplash.com/wOGhHamMqLc///300x300"}
    ]
  };
  componentDidMount() {
     this.responsive_design()
   }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    console.log(index)
    counters[index].value++
    this.setState({counters});
  }

  handleReset = () => {
    let counters = [...this.state.counters];
    counters.map(c=>c.value=0);
    this.setState({counters});
  };

  responsive_design = () => {
    if(window.innerWidth < 400){
      console.log("hellasdasdo")
      const counters = [...this.state.counters];
      counters.map(c =>  c.url=c.url.split("///")[0]+"/160x160")
      this.setState({counters});

      navigator.permissions && navigator.permissions.query({name: 'geolocation'}).then(function(PermissionStatus) {
        if(PermissionStatus.state == 'granted'){
          var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
                };

                function success(pos) {
                var crd = pos.coords;

                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);
                altert(`Latitude,Longitude : ${crd.latitude},${crd.longitude}`)
                }

                function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
                }

                navigator.geolocation.getCurrentPosition(success, error, options);
        }else{
            console.log(" permission is not allowed")
        }
    })
    }

  }

  render(){
    return (<div id="container_counters" className="container">
              <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
              <div className="row">
              {this.state.counters.map(counter =>(
                <Counter
                  key={counter.id}
                  onDelete={() =>this.handleDelete(counter.id)}
                  onIncrement = {()=> this.handleIncrement(counter)}
                  counter={counter}
                  url = {counter.url}

                  >

                </Counter>

            ))}
              </div>
            </div>

    )

  }
}

export default Counters;
