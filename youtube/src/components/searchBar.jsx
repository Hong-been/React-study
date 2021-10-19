import React, { Component } from "react";
import styles from "./searchBar.module.css";

class SearchBar extends Component {
	render() {
		return (
			<nav className={styles.nav}>
				<button type="button" className={styles.home}>
					<img src="images/logo.png" className={styles.logo}alt="youtube logo"></img>
          <span className={styles.title}>Youtube</span>
				</button>
				<form className={styles.form}>
					<input
						type="text"
						placeholder="Search"
						className={styles.input}
					></input>
					<button type="submit" className={styles.search}>
						<img src="images/search.png" alt="search icon"></img>
					</button>
				</form>
			</nav>
		);
	}
}

export default SearchBar;
