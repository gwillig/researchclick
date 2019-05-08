import React, {Component} from "react";

class Counter extends Component{

  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
    return classes
  }

  formatCount(){
    const value= this.props.counter.value;

    return value === 0 ? 0 : value;

  }


  render(){

    return (

            <div className="col-sm">
              {this.props.children}
              <p><img onClick={() => this.props.onIncrement(this.props.counter.value)}  src={this.props.url}></img></p>
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button
                  onClick={() => this.props.onIncrement(this.props.counter.value)}
                  className="btn btn-secondary btn-sm"
              >
                Increment
              </button>

              <button onClick={this.props.onDelete} className="button btn-danger btn-sm m-2">Delete</button>

            </div>
           );
  }



}

export default Counter;
