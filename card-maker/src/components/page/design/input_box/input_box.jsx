import React, { createRef, memo, useEffect, useRef, useState } from "react";
import styles from "./input_box.module.css";

const InputBox = memo(({ card, cardId, state, cardRepository }) => {
	const imageInputRef = useRef();

	const { Name, Company, Role, Statement, Number, Email, Address, imgURL } =
		card;
	const [profileImage, setProfileImage] = useState(null);

	const handleChange = (event) => {
		const { value } = event.target;
		const key = event.target["placeholder"];
		cardRepository.writeCardsData(state.id, cardId, key, value);
	};

	useEffect(() => {
		// cardRepository.writeCardsData(state.id, cardId, "id", cardId);
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault();

		cardRepository.writeCardsData(state.id, cardId, "imgURL", profileImage);
	};
	const handleChangeImage = (event) => {
		const file = imageInputRef.current.files[0];
		console.log(URL.createObjectURL(file));
		setProfileImage(event.target.value);
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
					type="tel"
					className={styles.number}
					placeholder="Number"
					pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
					onChange={handleChange}
					value={Number}
				></input>
				<input
					type="email"
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
			<form method="post" action="upload">
				<input
					ref={imageInputRef}
					type="file"
					name="profile"
					accept="image/png, image/jpeg"
					onChange={handleChangeImage}
				></input>
				<button type="submit" className={styles.upload} onClick={handleSubmit}>
					Upload Image
				</button>
			</form>
		</section>
	);
});

export default InputBox;
