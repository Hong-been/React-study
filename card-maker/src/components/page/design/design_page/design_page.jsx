import React from "react";
import styles from "./design_page.module.css";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";

const DesignPage = (props) => {
	const onLogoutClick = () => {
		console.log("Click log-out button");
	};
	return (
		<>
			<Header onLogoutClick={onLogoutClick} />
			<MakerList />
		</>
	);
};

export default DesignPage;
