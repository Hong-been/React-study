import React, { createRef, memo } from "react";
import styles from "./input_box.module.css";

const InputBox = memo(({ cardId, state, realtimeService }) => {
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
				></input>
				<input
					type="text"
					className={styles.company}
					placeholder="Company"
					onChange={handleChange}
				></input>
				<input
					type="text"
					className={styles.role}
					placeholder="Role"
					onChange={handleChange}
				></input>
				<input
					type="text"
					className={styles.number}
					placeholder="Number"
					onChange={handleChange}
				></input>
				<input
					type="text"
					className={styles.email}
					placeholder="Email"
					onChange={handleChange}
				></input>
				<input
					type="text"
					className={styles.address}
					placeholder="Address"
					onChange={handleChange}
				></input>
				<input
					type="text"
					className={styles.statement}
					placeholder="Statement"
					onChange={handleChange}
				></input>
				<input
					type="text"
					className={styles.description}
					placeholder="Description"
					onChange={handleChange}
				></input>
			</form>
			<button className={styles.upload}>Upload Image</button>
		</section>
	);
});

export default InputBox;
