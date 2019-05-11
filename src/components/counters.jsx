import React,{Component} from 'react';
import Counter from './counter'

// countinue 2:00:49
class Counters extends Component{
  state = {
    url:"https://picsum.photos/200/300/?random",
    counters:[
      {id:1,value:0,url:"https://picsum.photos/id/237///300/300"},
      {id:2,value:0,url:"https://picsum.photos/id/1003///300/300"},
      {id:3,value:0,url:"https://picsum.photos/id/1012///300/300"},
      {id:4,value:0,url:"https://picsum.photos/id/1027///300/300"},
      {id:5,value:0,url:"http://placekitten.com///300/300"},
      {id:5,value:0,url:"https://picsum.photos/id/431///300/300"}
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
      counters.map(c =>  c.url=c.url.split("///")[0]+"/160/160")
      this.setState({counters});
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
