import styles from "./searchBar.module.css";
import React from "react";

const SearchBar = (props) => {
	const inputRef = React.createRef();
	const formRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault();
		const keyword=inputRef.current.value;
		keyword && props.onSubmit(keyword);
	}

	return (
		<nav className={styles.nav}>
			<button type="button" className={styles.home}>
				<img
					src="images/logo.png"
					className={styles.logo}
					alt="youtube logo"
				></img>
				<span className={styles.title}>Youtube</span>
			</button>
			<form className={styles.form} ref={formRef} onSubmit={onSubmit}>
				<input
					ref={inputRef}
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
};

export default SearchBar;
