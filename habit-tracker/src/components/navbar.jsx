import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
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