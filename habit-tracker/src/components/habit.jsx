import React, { Component } from "react";
import "./habit.css";

class Habit extends Component {
	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	handleDecrement = () => {
		const count = this.state.count - 1;
		this.setState({ count: count < 0 ? 0 : count });
	};

	handleDelete = () => {

  };

	render() {
		const { name, count } = this.props.habit;
		return (
			<li className="habit">
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={this.handleIncrement}
				>
					<i className="far fa-plus-square"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={this.handleDecrement}
				>
					<i className="far fa-minus-square"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={this.handleDelete}
				>
					<i className="fas fa-trash"></i>
				</button>
			</li>
		);
	}
}

export default Habit;
