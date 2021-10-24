import React, { memo } from "react";
import { useHistory } from "react-router";
import styles from "./login_popup.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const LoginPopUp = memo(({ authService }) => {
	const history = useHistory();

	const goToDesign = (user) => {
		history.push({
			pathname: "/design",
			state: {
				id: user.uid,
				name: user.displayName,
				photo: user.photoURL || "/images/profile_placeholder.png",
			},
		});
	};

	const onLoginClick = (event) => {
		const providerName = event.currentTarget.textContent;
		authService //
			.logIn(providerName)
			.then(({ user }) => goToDesign(user));
	};

	return (
		<div className={styles.LoginPopUp}>
			<Header />
			<main className={styles.main}>
				Log in for Free
				<ul>
					<li>
						<button className={styles.loginBtn} onClick={onLoginClick}>
							Google
						</button>
					</li>
					<li>
						<button className={styles.loginBtn} onClick={onLoginClick}>
							Github
						</button>
					</li>
				</ul>
			</main>
			<Footer />
		</div>
	);
});

export default LoginPopUp;
