import React, { memo } from "react";
import styles from "./card_list.module.css";
import CardItem from "../card_item/card_item";

const CardList = memo((props) => {
	return (
		<ul className={styles.list}>
			<CardItem />
		</ul>
	);
});

export default CardList;
