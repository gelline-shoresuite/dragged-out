import React, { Component } from 'react';
import './App.css';

import Headers from './headers'

//installed react-routed-dom and draggable
import Draggable from 'react-draggable'; // The default
 

class App extends Component {

  state = {
    x: this.props.x,
    y: this.props.y,

    over: this.props.over
  };

  handleDrag = (e, {deltaX, deltaY}) =>{
    this.setState({
      x: this.state.x + deltaX,
      y: this.state.y + deltaY
    });
  };

  onMouseEnter(){
    this.setState({
      over: 'active'
    })
  };

  onMouseLeave(){
    this.setState({
      over: ' '
    })
  };
  
  render() {
    const {x, y} = this.state;

    return (
      <div className="App">
        <Headers />
        <div className={ "container"}>
          <div onMouseEnter={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()} class={'over ' + this.state.over}>
          </div> 

          <Draggable onDrag={this.handleDrag} >
          <p className="dragged">
            Drag Me
          </p>
          
          </Draggable>
        </div>
        
      </div>
    );
  }
}

export default App;


