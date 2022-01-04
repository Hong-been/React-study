import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ userName, onLogOut, onLogIn }) => {
	return (
		<header className={styles.header}>
			<div className={styles.title}>HONG CARD</div>
			<div className={styles.user}>
				{userName ? (
					<>
						<span
							className={styles.name}
						>{`Happy New Year🐯\n${userName}✨`}</span>
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
