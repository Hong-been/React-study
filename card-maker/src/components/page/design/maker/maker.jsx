import React, { memo } from "react";
import styles from "./maker.module.css";
import InputBox from "../input_box/input_box";
import Preview from "../preview/preview";

const Maker = memo(({ card, state, realtimeService }) => {
	const cardId = Date.now();
	const handleDelete = () => {
		realtimeService.deleteCard(state.id, cardId);
	};

	return (
		<li key={cardId} className={styles.maker}>
			<button className={styles.delete} onClick={handleDelete}>
				X
			</button>
			<Preview
				card={card}
				cardId={cardId}
				realtimeService={realtimeService}
				state={state}
			/>
			<InputBox
				card={card}
				cardId={cardId}
				realtimeService={realtimeService}
				state={state}
			/>
		</li>
	);
});

export default Maker;
