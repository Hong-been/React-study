import React, { createRef, memo, useEffect, useState } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(
	({ userData, FileInput, authService, cardRepository }) => {
		const [cards, setCards] = useState({
			0: {
				Address:
					"서울특별시 강남구 테헤란로 124, 15층, 16층 (역삼동, 삼원타워)",
				Company: "Bithumb",
				Position: "사원",
				Email: "jinsil@naver.com",
				Name: "서진실",
				Number: "010-9016-7390",
				Role: "자금세탁방지 ",
				fileURL: null,
				id: 0,
			},
		});

		const updateCard = (card) => {
			setCards((cards) => {
				const updated = { ...cards };
				updated[card.id] = card;
				console.log(card);
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
			delete cards[cardId];
			setCards({ ...cards });
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
