import React, { memo, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./login_popup.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const LoginPopUp = memo(({ authService }) => {
	const history = useHistory();

	const goToDesign = (userId, userName) => {
		history.push({
			pathname: "/design",
			state: {
				id: userId,
				name: userName,
			},
		});
	};

	const onLoginClick = (event) => {
		const providerName = event.currentTarget.textContent;
		authService //
			.logIn(providerName)
			.then(({ user }) => {
				goToDesign(user.uid, user.displayName);
			});
	};

	useEffect(async () => {
		await authService.onAuthChange((user) => {
			user && goToDesign(user.uid, user.displayName);
		});
	});

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
