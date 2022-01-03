import React, { memo } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";

const MakerList = memo(
	({ FileInput, cards, addCard, updateCard, deleteCard }) => {
		return (
			<>
				<button className={styles.add} onClick={addCard}>
					+
				</button>
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
			</>
		);
	}
);

export default MakerList;
