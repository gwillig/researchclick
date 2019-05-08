import React,{Component} from 'react';
import Counter from './counter'

// countinue 2:00:49
class Counters extends Component{
  state = {
    url:"https://picsum.photos/200/300/?random",
    counters:[
      {id:1,value:0,url:"https://picsum.photos/id/237/300/300"},
      {id:2,value:0,url:"https://picsum.photos/id/1003/300/300"},
      {id:3,value:0,url:"https://picsum.photos/id/1012/300/300"},
      {id:4,value:0,url:"https://picsum.photos/id/1027/300/300"},
      {id:5,value:0,url:"http://placekitten.com/300/300"}

    ]
  };

  handleDelete = (counterID) => {
    console.log("this.state.counter",this.state.counters)
    const counters = this.state.counters.filter(c => c.id !== counterID)
    console.log(counters)

    return this.setState({counters})
  };
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
  setSlider = () => {

    setTimeout(function(){
      console.log("asd")
    document.querySelector("#cover").style.zIndex=12
    document.querySelector("#message").style.color="black"
    let response = {};
    let test = {test:1}

    // document.querySelectorAll("span").forEach((element,i) => {
    //     response[i]=[parseInt(element.textContent),element.parentElement.children[0].children[0].src]
    // })
    // fetch("http://127.0.0.1:8000/response",
    // {   mode: 'cors',
    //     method: "POST",
    //     body: JSON.stringify(response),
    //     contentType: 'application/json',
    // })
    // .then(function(res){ return res.json(); })
    // .then(function(data){ alert( JSON.stringify( data ) ) })

  },9000)
  }
  render(){
    return (<div id="container_counters" className="container">
            <div id="cover" onLoad={this.setSlider()}>
                <p id="message">Thanks for your help</p>
            </div>
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
