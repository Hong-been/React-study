import React, { memo } from "react";
import styles from "./maker.module.css";
import InputBox from "../input_box/input_box";
import Preview from "../preview/preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Maker = memo(({ FileInput, card, updateCard, deleteCard }) => {
	return (
		<li className={styles.maker}>
			<button className={styles.delete} onClick={() => deleteCard(card)}>
				<FontAwesomeIcon className={styles.deleteIcon} icon="trash" />
			</button>

			<Preview card={card} />
			<InputBox
				FileInput={FileInput}
				card={card}
				updateCard={updateCard}
				onDelete={deleteCard}
			/>
		</li>
	);
});

export default Maker;
