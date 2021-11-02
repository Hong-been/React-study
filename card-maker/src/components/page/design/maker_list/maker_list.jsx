import React, { createRef, memo, useEffect, useState } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(
	({ userData, FileInput, authService, cardRepository }) => {
		const [cards, setCards] = useState({});

		const updateCard = (card) => {
			setCards((cards) => {
				const updated = { ...cards };
				updated[card.id] = card;
				return updated;
			});
		};

		const handleAddBtn = () => {
			const newCardId = Date.now();
			setCards({
				...cards,
				[newCardId]: {
					id: newCardId,
					fileURL: null,
				},
			});
		};

		useEffect(() => {
			cardRepository.writeCardsData(userData.id, cards);
		}, [cards]);

		useEffect(() => {
			authService.onAuthChange((user) => {
				if (user) {
					const stopSync = getCards(user.uid);
					return () => stopSync();
				} else {
					console.log("maker_list.jsx : no user");
				}
			});
		}, []);

		const getCards = (id) => {
			return cardRepository.getAllCardsData(id, (cards) => {
				setCards({ ...cards });
			});
		};

		const handleDeleteBtn = (cardId) => {
			if (!authService.isUserSignedIn()) {
				return;
			}
			cardRepository.deleteCard(userData.id, cardId);
		};

		return (
			<>
				<button className={styles.add} onClick={handleAddBtn}>
					+
				</button>
				<ul className={styles.list}>
					{Object.keys(cards).map((id) => (
						<Maker
							key={cards[id].id}
							card={cards[id]}
							updateCard={updateCard}
							FileInput={FileInput}
							cardRepository={cardRepository}
							userData={userData}
							onDelete={handleDeleteBtn}
						/>
					))}
				</ul>
			</>
		);
	}
);

export default MakerList;
