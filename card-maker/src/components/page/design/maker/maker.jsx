import React, { memo } from "react";
import styles from "./maker.module.css";
import InputBox from "../input_box/input_box";
import Preview from "../preview/preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Maker = memo(
	({
		key,
		card,
		userData,
		updateCard,
		FileInput,
		cardRepository,
		onDelete,
	}) => {
		const handleDelete = () => {
			onDelete(card.id);
		};

		return (
			<li key={key} className={styles.maker}>
				<button className={styles.delete} onClick={handleDelete}>
					<FontAwesomeIcon className={styles.deleteIcon} icon="trash" />
				</button>

				<Preview
					card={card}
					cardId={card.id}
					cardRepository={cardRepository}
					userData={userData}
				/>
				<InputBox
					card={card}
					cardId={card.id}
					updateCard={updateCard}
					FileInput={FileInput}
					cardRepository={cardRepository}
					userData={userData}
				/>
			</li>
		);
	}
);

export default Maker;
