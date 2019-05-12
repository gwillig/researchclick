import React,{Component} from 'react';
import Counter from './counter'
import Dropdown from './dropdown'


class Counters extends Component{
  state = {
    url:"https://picsum.photos/200/300/?random",
    counters:[
      {id:1,value:0,url:"https://source.unsplash.com/owFmHMC4QAI///300x300",alt:"woman"},
      {id:2,value:0,url:"https://source.unsplash.com/7uoMmzPd2JA///300x300",alt:"man"},
      {id:3,value:0,url:"https://source.unsplash.com/XShgTPsoATU///300x300",alt:"dog"},
      {id:4,value:0,url:"https://source.unsplash.com/zBbY7VaUiqU///300x300",alt:"cat"},
      {id:5,value:0,url:"https://source.unsplash.com/5INN0oj12u4///300x300",alt:"puppet"},
      {id:6,value:0,url:"https://source.unsplash.com/wOGhHamMqLc///300x300",alt:"desk with books"}
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
    }
  }

  render(){
    return (<div id="container_counters" className="container">
              <Dropdown></Dropdown>
              <button onClick={this.handleReset} className="btn btn-dark btn-sm m-2">Reset</button>
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
