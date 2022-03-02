import React, { memo } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(
	({ FileInput, cards, addCard, updateCard, deleteCard, scrollUp }) => {
		return (
			
			<div className={styles.container}>
				
				{cards && (
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
				)}
				
			</div>
		);
	}
);

export default MakerList;
