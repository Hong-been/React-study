import React, { memo } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo((props) => {
	return (
		<ul className={styles.list}>
			<Maker />
			<Maker />
			<Maker />
			<Maker />
		</ul>
	);
});

export default MakerList;
