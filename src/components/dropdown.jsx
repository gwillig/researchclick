import React,{Component} from 'react';

class Dropdown extends Component{
  // Based on Paul Ekman  six basic emotions (anger, disgust, fear, happiness, sadness, and surprise)
  //Source: https://www.researchgate.net/figure/a-Example-prototypical-expressions-of-six-basic-emotions-and-a-neutral-face-for-actor_fig2_10978419
  state={
    mood:[
      {text:"Surprise | Überrascht ",value:"surprise"},
      {text:"Sad | Traurig ",value:"sad"},
      {text:"Happy | Glücklich ",value:"happy"},
      {text:"Fear | Angst ",value:"fear"},
      {text:"Disgust | Ekel ",value:"disgust"},
      {text:"Angry | Wütend ",value:"angry"},
  ],
  }
  render(){
    return(
      <React.Fragment>
          <select className="btn btn-secondary" id="dropdown">
          <option value="">"Stimmung | Mood"</option>
            {this.state.mood.map(element=>(
                <option value={element.value}>{element.text}</option>
            ))}
          </select>
      </React.Fragment>


    )
  }
}

export default Dropdown;
