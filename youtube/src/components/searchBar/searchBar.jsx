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
			const ball = themeBallRef.current;

			if (button.classList.contains(styles.dark)){
				button.classList.remove(styles.dark);
				ball.childNodes[0].classList.remove("fa-moon");
				ball.childNodes[0].classList.add("fa-sun");
				ball.style.transform=`translateX(70%)`;
				button.style.background="#c6c6c4";
				document.documentElement.style.setProperty('--background', '#ffffff');
				document.documentElement.style.setProperty('--font-main', '#1a1a1a');
				
			}else{
				button.classList.add(styles.dark);
				ball.childNodes[0].classList.remove("fa-sun");
				ball.childNodes[0].classList.add("fa-moon");
				ball.style.transform=`translateX(-70%)`;
				button.style.background="gray";
				document.documentElement.style.setProperty('--background', '#181818');
				document.documentElement.style.setProperty('--font-main', '#dfdfdf');
			}
		};
		
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
						<span ref={themeBallRef} className={styles.ball}>
							<i className={"fas fa-moon"}></i>
						</span>
				</button>
				
			</header>
		);
	}
);

export default SearchBar;
