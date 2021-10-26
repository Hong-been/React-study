import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./header.module.css";

const Header = memo(({ state, authService }) => {
	const history = useHistory();

	const [isSignedIn, setIsSignedIn] = useState(authService.isUserSignedIn());
	const [userData, setUserData] = useState(state && state);

	useEffect(() => {
		setIsSignedIn(authService.isUserSignedIn());
		console.log("mounted update", isSignedIn);
	});
	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserData(user);
				setIsSignedIn(true);
			} else {
				setIsSignedIn(false);
			}
		});
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
						<span className={styles.name}>
							Welcome {userData.displayName || ""}!
						</span>
						<button
							className={styles.logout}
							onClick={() => {
								authService.logOut();
								setIsSignedIn(false);
								goToLogin();
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
