import React, {Component} from "react";

class Counter extends Component{
  state = {
    count:0,
    tags: ['tag1','tag2','tag3']
  };
  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";
    return classes
  }


  handleIncrement = (evt) => {
    console.log("Increment clicked",evt)
    this.setState({count: this.state.count + 1})
  }
  render(){
    return (
            <div>
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button
                  onClick={() => this.handleIncrement({id:1})}
                  className="btn btn-secondary btn-sm"
              >
                Increment
              </button>
              <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
           );
  }

  formatCount(){
    const {count} = this.state;
    return count === 0 ? "Zero" : count;

  }

}

export default Counter;
