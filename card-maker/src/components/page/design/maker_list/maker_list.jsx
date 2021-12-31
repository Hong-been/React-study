import React, { memo } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(
	({ FileInput, cards, addCard, updateCard, deleteCard }) => {
		// const updateCard = (card) => {
		// 	setCards((cards) => {
		// 		const updated = { ...cards };
		// 		updated[card.id] = card;
		// 		// console.log(card);
		// 		return updated;
		// 	});
		// };

		// const getCards = useCallback(
		// 	(id) => {
		// 		return cardRepository.getAllCardsData(id, (cards) => {
		// 			setCards({ ...cards });
		// 		});
		// 	},
		// 	[cardRepository]
		// );

		// useEffect(() => {
		// 	cardRepository.writeCardsData(userData.id, cards);
		// }, [cardRepository, userData, cards]);

		// useEffect(() => {
		// 	authService.onAuthChange((user) => {
		// 		if (user) {
		// 			const stopSync = getCards(user.uid);
		// 			return () => stopSync();
		// 		} else {
		// 			console.log("maker_list.jsx : no user");
		// 		}
		// 	});
		// }, [authService, getCards]);

		// const handleDeleteBtn = (cardId) => {
		// 	delete cards[cardId];
		// 	setCards({ ...cards });
		// };

		return (
			<>
				<button className={styles.add} FileInput={FileInput} onClick={addCard}>
					+
				</button>
				<ul className={styles.list}>
					{Object.keys(cards).map((key) => (
						<Maker
							key={key}
							FileInput={FileInput}
							card={cards[key]}
							updateCard={updateCard}
							deleteCard={deleteCard}
						/>
					))}
				</ul>
			</>
		);
	}
);

export default MakerList;
