import React, { memo } from "react";
import styles from "./input_box.module.css";

const InputBox = memo((props) => {
	return (
		<li className={styles.container}>
			<form className={styles.information}>
				<input type="text" className={styles.name} placeholder="Name"></input>
				<input
					type="text"
					className={styles.company}
					placeholder="Company"
				></input>
				<input type="text" className={styles.role} placeholder="Role"></input>
				<input
					type="text"
					className={styles.number}
					placeholder="Number"
				></input>
				<input type="text" className={styles.email} placeholder="Email"></input>
				<input
					type="text"
					className={styles.address}
					placeholder="Address"
				></input>
				<input
					type="text"
					className={styles.statement}
					placeholder="Statement"
				></input>
				<input
					type="text"
					className={styles.description}
					placeholder="Description"
				></input>
			</form>
			<button className={styles.upload}>Upload Image</button>
			<button className={styles.delete}>Delete</button>
		</li>
	);
});

export default InputBox;
