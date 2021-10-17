import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className="header">
					<span className="header-title">🌱 Habit Tracker</span>
					<span className="header-count">{this.props.totalCount}</span>
				</header>
    );
  }
}

export default Navbar;