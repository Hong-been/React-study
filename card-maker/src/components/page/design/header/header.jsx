import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./header.module.css";

const Header = memo(({ state, authService }) => {
	const history = useHistory();
	const user = authService.getUserData();
	console.log(user);
	const photoURL = (user && user.photoURL) || "/images/profile_placeholder.png";
	const name = user && user.displayName;

	const [isSignedIn, setIsSignedIn] = useState(authService.isUserSignedIn());

	useEffect(() => {
		setIsSignedIn(authService.isUserSignedIn());
		console.log("mounted update", isSignedIn);
	});

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
