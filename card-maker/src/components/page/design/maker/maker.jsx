import React, { memo } from "react";
import styles from "./maker.module.css";
import InputBox from "../input_box/input_box";
import Preview from "../preview/preview";

const Maker = memo(({ card, state, cardRepository, onDelete }) => {
	const handleDelete = () => {
		onDelete(card.id);
	};

	return (
		<li className={styles.maker}>
			<button className={styles.delete} onClick={handleDelete}>
				X
			</button>
			<Preview
				card={card}
				cardId={card.id}
				cardRepository={cardRepository}
				state={state}
			/>
			<InputBox
				card={card}
				cardId={card.id}
				cardRepository={cardRepository}
				state={state}
			/>
		</li>
	);
});

export default Maker;
