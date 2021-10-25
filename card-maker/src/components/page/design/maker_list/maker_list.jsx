import React, { createRef, memo, useEffect, useState } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(({ state, authService, cardRepository }) => {
	const [cards, setCards] = useState({});

	const handleAddBtn = () => {
		const newCardId = Date.now();
		cardRepository.writeCardsData(state.id, newCardId, "id", newCardId);
	};

	useEffect(() => {
		if (!authService.isUserSignedIn()) {
			return;
		}
		const stopSync = cardRepository.getAllCardsData(state.id, (cards) =>
			setCards(cards)
		);
		return () => stopSync();
	}, [state.id]);

	const handleDeleteBtn = (cardId) => {
		if (!authService.isUserSignedIn()) {
			return;
		}
		cardRepository.deleteCard(state.id, cardId);
	};

	return (
		<>
			<button className={styles.add} onClick={handleAddBtn}>
				+
			</button>
			<ul className={styles.list}>
				{cards &&
					Object.keys(cards).length &&
					Object.values(cards).map((card) => (
						<Maker
							key={card.id}
							card={card}
							cardRepository={cardRepository}
							state={state}
							onDelete={handleDeleteBtn}
						/>
					))}
			</ul>
		</>
	);
});

export default MakerList;
