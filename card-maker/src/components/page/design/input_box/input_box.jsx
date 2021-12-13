import React, { createRef, memo, useEffect, useRef, useState } from "react";
import styles from "./input_box.module.css";

const InputBox = memo(
	({ card, cardId, userData, updateCard, FileInput, cardRepository }) => {
		const { Name, Company, Role, Position, Number, Email, Address } = card;

		const onFileChange = (file) => {
			updateCard({ ...card, fileName: file.name, fileURL: file.url });
		};

		const handleChange = (event) => {
			const { value } = event.target;
			const key = event.target["placeholder"];
			updateCard({ ...card, [key]: value });
		};

		return (
			<section className={styles.container}>
				<form className={styles.information}>
					<input
						type="text"
						className={(styles.name, styles.input)}
						placeholder="Name"
						onChange={handleChange}
						value={Name}
					></input>
					<input
						type="text"
						className={(styles.company, styles.input)}
						placeholder="Company"
						onChange={handleChange}
						value={Company}
					></input>
					<input
						type="text"
						className={(styles.role, styles.input)}
						placeholder="Role"
						onChange={handleChange}
						value={Role}
					></input>
					<input
						type="text"
						className={(styles.Position, styles.input)}
						placeholder="Position"
						onChange={handleChange}
						value={Position}
					></input>
					<input
						type="tel"
						className={(styles.number, styles.input)}
						placeholder="Number"
						onChange={handleChange}
						value={Number}
					></input>
					<input
						type="email"
						className={(styles.email, styles.input)}
						placeholder="Email"
						onChange={handleChange}
						value={Email}
					></input>
					<input
						type="text"
						className={(styles.address, styles.input)}
						placeholder="Address"
						onChange={handleChange}
						value={Address}
					></input>
				</form>
				<div className={styles.fileInput}>
					<FileInput onFileChange={onFileChange} />
				</div>
			</section>
		);
	}
);

export default InputBox;
