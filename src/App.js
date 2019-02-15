import React, { Component } from 'react';
import './App.css';

import Headers from './headers';


import Drag from './Draggable';
//import Drag from './DragAndDrop';
 

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      x: this.props.x,
      y: this.props.y,

      contents: [
        { name: "Hello",
          content: "World",
          stated: "open"},
        { name: "Bad",
          content: "Time",
          stated: "closed"}, 
        { name: "Good",
          content: "Work",
          stated: "open"},
        { name: "Bye",
          content: "Time",
          stated: "open"},
      ],
      
    }
  }

  handleDrag = (e, {deltaX, deltaY}) =>{
    const {x, y} = this.state;
    this.setState({
      oldX: x,
      oldY: y,

      x: x + deltaX,
      y: y + deltaY
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
          
          <Drag> HEY </Drag>   
          <Drag> LOOK </Drag>     
          <Drag> LISTEN </Drag>     
          <Drag> !!!!! </Drag>            
        
        
      </div>
    );
  }
}

export default App;


