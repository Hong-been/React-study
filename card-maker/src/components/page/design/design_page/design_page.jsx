import React, { useEffect, useState } from "react";
import styles from "./design_page.module.css";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";
import { useLocation } from "react-router";

const DesignPage = ({ FileInput, authService, cardRepository }) => {
	const [state, setState] = useState(useLocation().state);

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
		cardRepository.signUpUser(state.id, state.name, state.email);
	}, [state]);

	return (
		<>
			<Header authService={authService} userData={state} />
			<MakerList
				FileInput={FileInput}
				authService={authService}
				cardRepository={cardRepository}
				userData={state}
			/>
		</>
	);
};

export default DesignPage;
