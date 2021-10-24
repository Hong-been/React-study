import React, { memo, useState } from "react";
import { useHistory } from "react-router";
import styles from "./header.module.css";

const Header = memo(({ state, authService }) => {
	const history = useHistory();
	const photoURL = state.photo;
	const name = state.name;

	const [isSignedIn, setIsSignedIn] = useState(authService.isUserSignedIn());

	const goToLogin = () => {
		history.push("/login");
	};

	return (
		<header className={styles.header}>
			<div className={styles.title}>Business Card Maker</div>
			<div className={styles.user}>
				{isSignedIn ? (
					<>
						<img className={styles.photo} src={photoURL}></img>
						<span className={styles.name}>Welcome {name}!</span>
						<button
							className={styles.logout}
							onClick={() => {
								authService.logOut();
								setIsSignedIn(false);
							}}
						>
							Log out
						</button>
					</>
				) : (
					<button className={styles.logIn} onClick={goToLogin}>
						Log In
					</button>
				)}
			</div>
		</header>
	);
});

export default Header;
