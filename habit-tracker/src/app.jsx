import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import "./app.css";

class App extends Component {
	state = {
		habits: [ ],
	};

	handleIncrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		habits[index].count++;
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = [...this.state.habits];
		const index = habits.indexOf(habit);
		const count = habits[index].count - 1;
		habits[index].count = count - 1 < 0 ? 0 : count;
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		this.setState({ habits });
	};

	handleAdd = (name) => {
		const id = Date.now();
		const habits = [...this.state.habits, { id, name, count: 0 }];
		this.setState({habits});
	};

	handleReset = (event) => {
		event.preventDefault();
		const habits = this.state.habits.map(habit => {
			habit.count = 0;
			return habit;
		})
		this.setState({habits});
	};

	render() {
		return (
			<>
				<Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default App;
