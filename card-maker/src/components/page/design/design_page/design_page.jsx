import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "./design_page.module.css";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";
import { useLocation } from "react-router";

const DesignPage = ({ FileInput, authService, cardRepository }) => {
	const [state, setState] = useState(useLocation().state);
	const history = useHistory();

	const goToLogin = () => {
		history.push("/login");
	};

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setState({
					...state,
					id: user.uid,
					name: user.displayName,
					email: user.email,
				});
			} else {
				console.log("Design page: no user");
			}
		});
	}, []);

	useEffect(() => {
		if (!state) goToLogin();
	});

	useEffect(() => {
		cardRepository.signUpUser(state.id, state.name, state.email);
	}, [state]);

	return state ? (
		<>
			<Header
				authService={authService}
				userData={state}
				goToLogin={goToLogin}
			/>
			<MakerList
				FileInput={FileInput}
				authService={authService}
				cardRepository={cardRepository}
				userData={state}
			/>
		</>
	) : (
		<></>
	);
};

export default DesignPage;
