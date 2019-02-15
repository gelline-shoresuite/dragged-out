import React, { Component } from 'react';

class DragAndDrop extends Component {

	state = {
		target: null
	}

 
	render(){
		const contents = {
			open: [],
			close: []
		}

			this.state.contents.forEach(element => {
				contents[element.stated].push(
					<div
						key={element.name}
						draggable
						className="draggable"
					>{element.name} {element.content}</div>
				)
			})

		return(
			<div>

				
			</div>
		);

	}


}

export default DragAndDrop;