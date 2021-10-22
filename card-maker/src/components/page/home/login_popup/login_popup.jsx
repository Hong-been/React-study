import React, { memo } from "react";
import { useHistory } from "react-router";
import styles from "./login_popup.module.css";

const LoginPopUp = memo((props) => {
	const history = useHistory();
	return (
		<div className={styles.LoginPopUp}>
			<header className={styles.header}>
				Wellcome to Bisiness Card Maker ✨
			</header>
			<main className={styles.main}>
				Log in for Free
				<button className={styles.loginBtn} onClick={props.onLoginClick}>
					with Google
				</button>
				<button
					className={styles.loginBtn}
					onClick={() => history.push("/design")}
				>
					with GitHub
				</button>
			</main>
			<footer className={styles.footer}>Create your card! </footer>
		</div>
	);
});

export default LoginPopUp;
