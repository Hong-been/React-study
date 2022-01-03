import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ userName, onLogOut, onLogIn }) => {
	// console.log("header");
	return (
		<header className={styles.header}>
			<div className={styles.title}>HONG CARD</div>
			<div className={styles.user}>
				{userName ? (
					<>
						<span className={styles.name}>{`${userName}님\n안녕하세요🐯`}</span>
						<button className={styles.logInOut} onClick={onLogOut}>
							Log out
						</button>
					</>
				) : (
					<button className={styles.logInOut} onClick={onLogIn}>
						Log In
					</button>
				)}
			</div>
		</header>
	);
});

export default Header;
