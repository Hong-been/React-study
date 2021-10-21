import styles from "./searchBar.module.css";
import React, {memo} from "react";

const SearchBar = memo(
	({onSubmit, onHomeClick}) => {
		const inputRef = React.createRef();
		const themeBtnRef = React.createRef();
		const themeBallRef = React.createRef();
	
		const handleSubmit = (event) => {
			event.preventDefault();
			window.scroll(0,0);
			const query=inputRef.current.value;
			query && onSubmit(query);
		}
	
		const handleClick = () => {
			onHomeClick(null);
		}

		const toggleTheme = () => {
			const button = themeBtnRef.current;
			const darkBg='#181818';
			const darkFont='#dfdfdf';
			const brightBg='#ffffff';
			const brightFont='#1a1a1a';

			if (button.classList.contains(styles.dark)){
				changeColorProperty(brightBg, brightFont);		
			}else{
				changeColorProperty(darkBg, darkFont);		
			}
			button.classList.toggle(styles.dark);
			button.classList.toggle(styles.bright);
		};

		const changeColorProperty = (bg, font) => {
			document.documentElement.style.setProperty('--background', bg);
			document.documentElement.style.setProperty('--font-main', font);
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
				<button ref={themeBtnRef} className={`${styles.theme} ${styles.dark}`} onClick={toggleTheme}>
						<span className={styles.ball}>
							<i className={"fas fa-moon"}></i>
						</span>
				</button>
				
			</header>
		);
	}
);

export default SearchBar;
