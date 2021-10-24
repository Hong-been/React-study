import React, { memo } from "react";
import styles from "./maker.module.css";
import InputBox from "../input_box/input_box";
import Preview from "../preview/preview";

const Maker = memo(({ state, realtimeService }) => {
	const cardId = Date.now();
	return (
		<li key={cardId} className={styles.maker}>
			<button className={styles.delete}>X</button>
			<Preview
				cardId={cardId}
				realtimeService={realtimeService}
				state={state}
			/>
			<InputBox
				cardId={cardId}
				realtimeService={realtimeService}
				state={state}
			/>
		</li>
	);
});

export default Maker;
