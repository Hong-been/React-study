import React, { memo } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(({ state, realtimeService }) => {
	return (
		<ul className={styles.list}>
			<Maker realtimeService={realtimeService} state={state} />
		</ul>
	);
});

export default MakerList;
