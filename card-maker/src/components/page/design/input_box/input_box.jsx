import React, { createRef, memo } from "react";
import styles from "./input_box.module.css";

const InputBox = memo(({ card, cardId, state, realtimeService }) => {
	const { Name, Company, Role, Statement, Number, Email, Address, imgURL } =
		card;

	const handleChange = (event) => {
		const { value } = event.target;
		const key = event.target["placeholder"];
		realtimeService.writeCardsData(state.id, cardId, key, value);
	};

	return (
		<section className={styles.container}>
			<form className={styles.information}>
				<input
					type="text"
					className={styles.name}
					placeholder="Name"
					onChange={handleChange}
					value={Name}
				></input>
				<input
					type="text"
					className={styles.company}
					placeholder="Company"
					onChange={handleChange}
					value={Company}
				></input>
				<input
					type="text"
					className={styles.role}
					placeholder="Role"
					onChange={handleChange}
					value={Role}
				></input>
				<input
					type="text"
					className={styles.number}
					placeholder="Number"
					onChange={handleChange}
					value={Number}
				></input>
				<input
					type="text"
					className={styles.email}
					placeholder="Email"
					onChange={handleChange}
					value={Email}
				></input>
				<input
					type="text"
					className={styles.address}
					placeholder="Address"
					onChange={handleChange}
					value={Address}
				></input>
				<textarea
					type="text"
					className={styles.statement}
					placeholder="Statement"
					onChange={handleChange}
					value={Statement}
				></textarea>
			</form>
			<button className={styles.upload}>Upload Image</button>
		</section>
	);
});

export default InputBox;
