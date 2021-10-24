import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ state, onLogoutClick }) => {
	const photoURL = state.photo;
	const name = state.name;

	return (
		<header className={styles.header}>
			<div className={styles.title}>Business Card Maker</div>
			<div className={styles.user}>
				<img className={styles.photo} src={photoURL}></img>
				<span className={styles.name}>Welcome {name}!</span>
				<button className={styles.logout} onClick={onLogoutClick}>
					Log out
				</button>
			</div>
		</header>
	);
});

export default Header;
