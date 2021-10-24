import React from "react";
import styles from "./design_page.module.css";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";
import { useLocation } from "react-router";

const DesignPage = (props) => {
	const { state } = useLocation();

	const onLogoutClick = () => {
		console.log("Click log-out button");
	};
	return (
		<>
			<Header onLogoutClick={onLogoutClick} state={state} />
			<button className={styles.add}>+</button>
			<MakerList />
		</>
	);
};

export default DesignPage;
