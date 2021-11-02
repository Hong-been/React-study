import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
	const inputRef = useRef();
	const onButtonClick = (event) => {
		event.preventDefault();
		inputRef.current.click();
	};

	const onChange = async (event) => {
		const uploaded = await imageUploader.upload(event.target.files[0]);
		console.log(uploaded);
		uploaded &&
			onFileChange({
				name: uploaded.original_filename,
				url: uploaded.url,
			});
	};

	return (
		<>
			<input
				className={styles.input}
				ref={inputRef}
				type="file"
				onChange={onChange}
				name="profile"
				accept="image/*"
			></input>
			<button className={styles.button} onClick={onButtonClick}>
				{name || "Choose Image File!"}
			</button>
		</>
	);
};

export default ImageFileInput;
