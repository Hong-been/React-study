import React, { useEffect, useState } from "react";
import styles from "./design_page.module.css";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";
import { useLocation } from "react-router";

const DesignPage = ({ authService, cardRepository }) => {
	const db = cardRepository;
	const state = useLocation().state;

	useEffect(() => {
		authService.isUserSignedIn() &&
			db.signUpUser(state.id, state.name, state.email, state.photo);
	});

	return (
		<>
			<Header authService={authService} state={state} />
			<MakerList
				authService={authService}
				cardRepository={cardRepository}
				state={state}
			/>
		</>
	);
};

export default DesignPage;
