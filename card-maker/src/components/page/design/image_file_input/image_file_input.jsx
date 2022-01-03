import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
	const [loading, setLoading] = useState(false);

	const inputRef = useRef();
	const onButtonClick = (event) => {
		event.preventDefault();
		inputRef.current.click();
	};

	const onChange = async (event) => {
		setLoading(true);
		const uploaded = await imageUploader.upload(event.target.files[0]);
		setLoading(false);

		uploaded &&
			onFileChange({
				name: uploaded.original_filename,
				url: uploaded.url,
			});
	};

	return (
		<div>
			<input
				className={styles.input}
				ref={inputRef}
				type="file"
				onChange={onChange}
				name="profile"
				accept="image/*"
			></input>
			{!loading && (
				<button className={styles.button} onClick={onButtonClick}>
					{name ? "Change Image" : "Upload Image"}
				</button>
			)}
			{loading && <div className={styles.loading}></div>}
		</div>
	);
};

export default ImageFileInput;
