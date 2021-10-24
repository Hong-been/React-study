import React from "react";
import styles from "./design_page.module.css";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";
import { useLocation } from "react-router";

const DesignPage = ({ authService, realtimeService }) => {
	const { state } = useLocation();
	realtimeService.writeUserData(state.id, state.name, state.email, state.photo);

	return (
		<>
			<Header authService={authService} state={state} />
			<button className={styles.add}>+</button>
			<MakerList realtimeService={realtimeService} state={state} />
		</>
	);
};

export default DesignPage;
