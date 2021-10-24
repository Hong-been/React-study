import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo((props) => {
	return (
		<header className={styles.header}>
			<div className={styles.title}>Business Card Maker</div>
			<button className={styles.logout} onClick={props.onLogoutClick}>
				Log out
			</button>
		</header>
	);
});

export default Header;
