import React, {Component} from "react";

class Counter extends Component{
  /*@description
  @args
  */
  getBadgeClasses(){
    let classes = "badge m-2 ";
    classes += (this.props.counter.value === 0) ? "badge-warning" : "badge-primary";
    classes +=" vote"
    return classes
  }

  formatCount(){
    const value= this.props.counter.value;

    return value === 0 ? 0 : value;

  }


  render(){

    return (

            <div className="col-xs-2 img_div">
              {this.props.children}
              <p><img className="img_url" id={"img_id_"+this.props.counter.id} onClick={() => this.props.onIncrement(this.props.counter.value)}  src={this.props.url} alt={this.props.alt}></img></p>
              <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
           );
  }


}

export default Counter;
