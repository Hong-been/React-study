import React, { memo } from "react";
import styles from "./input_box.module.css";

const InputBox = memo(({ FileInput, card, updateCard }) => {
	const {
		Name,
		Company,
		Role,
		Position,
		Number,
		Email,
		Address,
		Color,
		fontColor,
		fileName,
	} = card;

	const onFileChange = (file) => {
		updateCard({ ...card, fileName: file.name, fileURL: file.url });
	};

	const onChange = (event) => {
		if (event.currentTarget === null) return;

		event.preventDefault();

		const key = event.currentTarget.name;
		const value = event.currentTarget.value;
		updateCard({ ...card, [key]: value });
	};

	return (
		<section className={styles.container}>
			<form className={styles.information}>
				<input
					type="text"
					className={(styles.name, styles.input)}
					placeholder="Name"
					name="Name"
					onChange={onChange}
					value={Name}
				></input>
				<input
					type="text"
					className={(styles.company, styles.input)}
					placeholder="Company"
					name="Company"
					onChange={onChange}
					value={Company}
				></input>
				<input
					type="text"
					className={(styles.role, styles.input)}
					placeholder="Role"
					name="Role"
					onChange={onChange}
					value={Role}
				></input>
				<input
					type="text"
					className={(styles.Position, styles.input)}
					placeholder="Position"
					name="Position"
					onChange={onChange}
					value={Position}
				></input>
				<input
					type="tel"
					className={(styles.number, styles.input)}
					placeholder="Number"
					name="Number"
					onChange={onChange}
					value={Number}
				></input>
				<input
					type="email"
					className={(styles.email, styles.input)}
					placeholder="Email"
					name="Email"
					onChange={onChange}
					value={Email}
				></input>

				<input
					type="text"
					className={(styles.address, styles.input)}
					placeholder="Address"
					name="Address"
					onChange={onChange}
					value={Address}
				></input>
			</form>
			<span className={styles.deco}>
				<div className={styles.colorContainer}>
					<input
						type="color"
						className={styles.colorPicker}
						name="Color"
						onChange={onChange}
						value={Color}
					></input>
					<label className={styles.label} for="Color">
						Background
					</label>
				</div>
				<div className={styles.colorContainer}>
					<input
						type="color"
						className={styles.colorPicker}
						name="fontColor"
						onChange={onChange}
						value={fontColor}
					></input>
					<label className={styles.label} for="fontColor">
						Font
					</label>
				</div>
				<span className={styles.fileInput}>
					<FileInput name={fileName} onFileChange={onFileChange} />
				</span>
			</span>
		</section>
	);
});

export default InputBox;
