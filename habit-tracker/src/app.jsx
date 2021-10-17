import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import "./app.css";

class App extends Component {
	state = {
		habits: [ ],
	};

	handleIncrement = (habit) => {
		const habits = this.state.habits.map(item => {
			if(item.id === habit.id){
				return {...habit, count: habit.count + 1};
			}
			return item;
		})
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = this.state.habits.map(item => {
			if(item.id === habit.id){
				const count = habit.count - 1;
				return {...habit, count: count < 0 ? 0 : count };
			}
			return item;
		})
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

	handleReset = () => {
		const habits=this.state.habits.map(habit => {
			if(habit.count>0){
				return {...habit, count:0 };
			}
			return habit;
		})
		this.setState({habits});
	};

	render() {
		return (
			<div>
				<Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onAdd={this.handleAdd}
					onReset={this.handleReset}
				/>
			</div>
		);
	}
}

export default App;
