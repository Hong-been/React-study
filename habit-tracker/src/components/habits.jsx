import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import "./habits.css";

class Habits extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

	handleIncrement = (habit) => {
		this.props.onIncrement(habit);
	};

	handleDecrement = (habit) => {
		this.props.onDecrement(habit);
	};

	handleDelete = (habit) => {
		this.props.onDelete(habit);
	};

	render() {
		const { habits } = this.props;

		return (
			<>
				<HabitAddForm onAdd={this.handleAdd}/>
				<ul className="habits">
					{habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
							onDelete={this.handleDelete}
						/>
					))}
				</ul>
        <button className="habits-reset" type="butotn" onClick={this.props.onReset}>Reset All</button>
			</>
		);
	}
}

export default Habits;
