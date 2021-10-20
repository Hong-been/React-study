import styles from "./searchBar.module.css";
import React from "react";

const SearchBar = (props) => {
	const inputRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault();
		const query=inputRef.current.value;
		query && props.onSubmit(query);
	}

	const onClick = () => {
		props.onHomeClick(null);
	}

	return (
		<header className={styles.nav}>
			<button type="button" className={styles.home} onClick={onClick}>
				<img
					src="images/logo.png"
					className={styles.logo}
					alt="youtube logo"
				></img>
				<span className={styles.title}>Youtube</span>
			</button>
			<form className={styles.form} onSubmit={onSubmit}>
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
		</header>
	);
};

export default SearchBar;
