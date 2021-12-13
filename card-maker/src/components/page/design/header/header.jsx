import React, { memo, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./header.module.css";

const Header = memo(({ userData, authService, goToLogin }) => {
	const [isSignedIn, setIsSignedIn] = useState(
		userData ? !!userData.id : goToLogin()
	);

	return (
		<header className={styles.header}>
			<div className={styles.title}>HONG CARD</div>
			<div className={styles.user}>
				{isSignedIn ? (
					<>
						<span className={styles.name}>
							{userData.name || ""}님 안녕하세요💖
						</span>
						<button
							className={styles.logout}
							onClick={() => {
								authService.logOut();
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
