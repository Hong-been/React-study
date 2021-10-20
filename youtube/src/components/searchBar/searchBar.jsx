import styles from "./searchBar.module.css";
import React, {memo} from "react";

const SearchBar = memo(
	({onSubmit, onHomeClick}) => {
		const inputRef = React.createRef();
	
		const handleSubmit = (event) => {
			event.preventDefault();
			const query=inputRef.current.value;
			query && onSubmit(query);
		}
	
		const handleClick = () => {
			onHomeClick(null);
		}
		
		return (	
			<header className={styles.nav}>
				<button type="button" className={styles.home} onClick={handleClick}>
					<img
						src="images/logo.png"
						className={styles.logo}
						alt="youtube logo"
					></img>
					<span className={styles.title}>Youtube</span>
				</button>
				<form className={styles.form} onSubmit={handleSubmit}>
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
	}
);

export default SearchBar;
