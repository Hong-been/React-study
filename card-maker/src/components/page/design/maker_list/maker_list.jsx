import React, { memo } from "react";
import styles from "./maker_list.module.css";
import Maker from "../maker/maker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MakerList = memo(
	({ FileInput, cards, addCard, updateCard, deleteCard, scrollUp }) => {
		return (
			<>
				<div className={styles.buttons}>
					<button className={styles.add} onClick={addCard}>
						<FontAwesomeIcon className={styles.icon} icon="plus" />
					</button>
					<button className={styles.up} onClick={scrollUp}>
						<FontAwesomeIcon className={styles.icon} icon="chevron-up" />
					</button>
				</div>
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
