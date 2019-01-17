import React, { Component } from 'react';
import "./Jar.css";

export default class Jar extends Component {
	state = {
		tasks: [
			{ name: "paperclip", category: "wip", background: "purple" },
			{ name: "apple", category: "wip", background: "purple" },
			{ name: "pear", category: "wip", background: "purple" }
		]
	}

	/*function Jar() {
		return (
			<React.Fragment>
				<h1>Goal of the Jar</h1>
	
				<div class="row" className="container-drag">
					<div class="col s6">Paperclips</div>
					<div class="col s6">Jar</div>
				</div>
	
			</React.Fragment>
		)
	}
	*/

	/*export default class DragSpace extends Component { */

	onDragStart = (ev, id) => {
		console.log("dragstart:", id);
		ev.dataTransfer.setData("id", id);
	}

	onDragOver = (ev) => {
		ev.preventDefault();
	}

	onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData("id");
		let tasks = this.state.tasks.filter((task) => {
			if (task.name == id) {
				task.category = cat;
			}
			return task;
		});
		this.setState({
			... this.state,
			tasks
		});
	}


	render() {
		console.log("hey");
		var tasks = {
			wip: [],
			complete: []
		};

		this.state.tasks.forEach((t) => {
			tasks[t.category].push(
				<div key={t.name}
					onDragStart={(e) => this.onDragStart(e, t.name)}
					draggable
					className="draggable"
					style={{ backgroundColor: t.bgcolor }}
				>
					{t.name}
				</div>
			)
		});



		return (
			<div className="container-drag">

				<div className="row">
					<div className="col s4"></div>
					<div className="header col s4">
						<h2>Jar Goal</h2>
					</div>
					<div className="col s4"></div>
				</div>

				<div className="row">

					<div className="wip col s4"
						onDragOver={(e) => this.onDragOver(e)}
						onDrop={(e) => { this.onDrop(e, "wip") }}>
					
						{tasks.wip}
					</div>

					<div className="col s4">
					</div>

					<div className="col s4">

						<div className="droppable col s12" 
						onDragOver={(e) => this.onDragOver(e)}
							onDrop={(e) => this.onDrop(e, "complete")}>
							{tasks.complete}
						</div>

					

					</div>

				</div>
			</div>
		);
	}
}