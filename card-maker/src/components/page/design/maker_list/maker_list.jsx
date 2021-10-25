import React, { createRef, memo, useEffect, useState } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(({ state, authService, cardRepository }) => {
	const emptyCard = {
		id: null,
		Name: null,
		Number: null,
		Email: null,
		Role: null,
		Statement: null,
		Address: null,
		imgURL: null,
	};
	const [cards, setCards] = useState([
		{
			id: Date.now(),
			Name: "Jinsil",
			Number: "+82 1234 5678",
			Email: "jin@gmail.com",
			Role: null,
			Statement: null,
			Address: null,
			imgURL: null,
		},
	]);

	const handleAddBtn = () => {
		setCards([
			...cards,
			{
				...emptyCard,
				id: Date.now(),
			},
		]);
	};

	useEffect(() => {
		if (!authService.isUserSignedIn()) {
			return;
		}
		const stopSync = cardRepository.getAllCardsData(state.id, (cards) => {
			setCards(cards);
		});
		return () => stopSync();
	}, [state.id]);

	const handleDeleteBtn = (cardId) => {
		console.log('deleted card"s id :', cardId);
	};

	return (
		<>
			<button className={styles.add} onClick={handleAddBtn}>
				+
			</button>
			<ul className={styles.list}>
				{Object.values(cards).map((card) => {
					return (
						<Maker
							key={card.id}
							card={card}
							cardRepository={cardRepository}
							state={state}
							onDelete={handleDeleteBtn}
						/>
					);
				})}
			</ul>
		</>
	);
});

export default MakerList;
