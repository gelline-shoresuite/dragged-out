import React, { Component } from 'react';

class App extends Component {

	state = {
		target: null
	}

	dragEnd = (event) => {
		this.setState({target: null})
	}
	
	dragStart = (event) => {
		event.dataTransfer.setData("text", event.target.id)
		this.setState({target: true})
	}
	
	drop = (event) => {
		if (event.target.id) {
			this.props.swap(event.dataTransfer.getData("text"), event.target.id)
			event.dataTransfer.clearData()
		}
	}
 
	render(){
		if (this.state.target === null) {
			return (
				<div
					className={this.cssGrid[this.state.index]}
					id={this.props.title} 
					draggable="true" 
					onDrop={this.drop} 
					onDragStart={this.dragStart} 
					onDragOver={
					(event) => event.preventDefault()
					} 
					onDragEnd={this.dragEnd} 
				>
	
			</div>
			)
		}else {
			return (
				<div 
					style={style} 
					className={this.cssGrid[this.state.index]} 
					id={this.props.title} 
					draggable="true" 
					onDrop={this.drop} 
					onDragStart={this.dragStart} 
					onDragOver={(event) => event.preventDefault()} 
					onDragEnd={this.dragEnd} 
				>
			
				</div>
			)
		}
	}


}