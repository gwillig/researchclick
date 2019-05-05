import React, {Component} from "react";

class Counter extends Component{
  state = {
    value:this.props.value,
    tags: ['tag1','tag2','tag3']
  };
  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.state.value === 0) ? "badge-warning" : "badge-primary";
    return classes
  }


  handleIncrement = (evt) => {
    console.log("Increment clicked",evt)
    this.setState({value: this.state.value + 1})
  }

  render(){
    console.log("prop",this.props.children)
    return (

            <div>

              {this.props.children}
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
              <button
                  onClick={() => this.handleIncrement({id:1})}
                  className="btn btn-secondary btn-sm"
              >
                Increment
              </button>
              <button onClick={this.props.onDelete} className="button btn-danger btn-sm m-2">Delete</button>
              <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
           );
  }

  formatCount(){
    const {value} = this.state;
    return value === 0 ? "Zero" : value;

  }

}

export default Counter;
