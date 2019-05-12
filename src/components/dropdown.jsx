import React,{Component} from 'react';

class Dropdown extends Component{
  // Based on Paul Ekman  six basic emotions (anger, disgust, fear, happiness, sadness, and surprise)
  //Source: https://www.researchgate.net/figure/a-Example-prototypical-expressions-of-six-basic-emotions-and-a-neutral-face-for-actor_fig2_10978419
  state={
    mood:[
      {id:0, text:"Surprise | Überrascht ",value:"surprise"},
      {id:1, text:"Sad | Traurig ",value:"sad"},
      {id:2, text:"Happy | Glücklich ",value:"happy"},
      {id:3, text:"Fear | Angst ",value:"fear"},
      {id:4, text:"Disgust | Ekel ",value:"disgust"},
      {id:5, text:"Angry | Wütend ",value:"angry"},
      ],
  }
  render(){
    return(
      <React.Fragment>
          <select className="btn btn-secondary" id="dropdown_mood">
          <option key="-1" value="None">"Stimmung | Mood"</option>
            {this.state.mood.map(element=>(
                <option key={element.id} value={element.value}>{element.text}</option>
            ))}
          </select>
      </React.Fragment>
    )
  }
}
export default Dropdown;
