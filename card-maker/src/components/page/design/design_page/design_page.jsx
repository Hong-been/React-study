import React, { memo, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import Header from "../header/header";
import MakerList from "../maker_list/maker_list";

const DesignPage = memo(({ FileInput, authService, cardRepository }) => {
	const history = useHistory();
	const historyState = history.state;
	const [userId, setUserId] = useState(historyState ? historyState.id : "");
	const [userName, setUserName] = useState(
		historyState ? historyState.name : ""
	);
	const [cards, setCards] = useState({});

	const onLogOut = useCallback(() => {
		authService.logOut();
	}, [authService]);

	useEffect(() => {
		if (!userId) return;

		async function fetchData() {
			const stopSync = await cardRepository.syncCards(
				userId,
				userName,
				(cards) => {
					setCards(cards);
				}
			);
			return stopSync;
		}

		return fetchData();
	}, [userId, userName, cardRepository]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
				setUserName(user.displayName);
			} else history.push("/");
		});
	}, [authService, userId, history]);

	const updateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});

		cardRepository.saveCard(userId, card);
	};

	const createCard = (event) => {
		event.preventDefault();
		const newCardId = Date.now();
		const newCard = {
			id: newCardId,
			fileURL: null,
		};

		updateCard(newCard);
	};

	const deleteCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
		cardRepository.removeCard(userId, card);
	};

	return (
		<>
			<Header
				userName={userName}
				onLogOut={onLogOut}
				onLogIn={() => history.push("/")}
			/>
			<MakerList
				FileInput={FileInput}
				cards={cards.cards}
				addCard={createCard}
				updateCard={updateCard}
				deleteCard={deleteCard}
			/>
		</>
	);
});

export default DesignPage;
