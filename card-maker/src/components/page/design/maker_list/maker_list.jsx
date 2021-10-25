import React, { createRef, memo, useEffect, useState } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(({ state, realtimeService }) => {
	// const [card, setCard] = useState([
	// 	<Maker realtimeService={realtimeService} state={state} />,
	// ]);
	const [cards, setCards] = useState([
		{
			Name: "HongBeen Lee",
			Company: "Uber",
			Role: null,
			Statement: null,
			Number: null,
			Email: null,
			Address: null,
			imgURL: null,
		},
		{
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
		console.log("Add empty card");
	};

	return (
		<>
			<button className={styles.add} onClick={handleAddBtn}>
				+
			</button>
			<ul className={styles.list}>
				{cards.map((card) => (
					<Maker card={card} realtimeService={realtimeService} state={state} />
				))}
			</ul>
		</>
	);
});

export default MakerList;
