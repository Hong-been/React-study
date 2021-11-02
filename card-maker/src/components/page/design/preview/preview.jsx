import React, { memo, useEffect, useRef, useState } from "react";
import styles from "./preview.module.css";

const DEFALUT_IMAGE = "./default.png";
const HIDE_MESSAGE = "Hide Image";
const SHOW_MESSAGE = "Show Image";

const Preview = memo(({ card }) => {
	const { Name, Company, Role, Address, Statement, Number, Email, fileURL } =
		card;
	const [isHiddenActive, setIsHiddenActive] = useState(false);
	const [hideorShowMessage, setHideorShowMessage] = useState(HIDE_MESSAGE);

	useEffect(() => {
		setIsHiddenActive(false);
	}, [fileURL]);

	useEffect(() => {
		if (!isHiddenActive) {
			setHideorShowMessage(SHOW_MESSAGE);
		} else {
			setHideorShowMessage(HIDE_MESSAGE);
		}
	}, [isHiddenActive]);

	const onHideButtonClick = (event) => {
		event.preventDefault();
		setIsHiddenActive(!isHiddenActive);
	};

	return (
		<div className={styles.container}>
			<section className={styles.card}>
				<img
					className={isHiddenActive ? (styles.img, styles.hidden) : styles.img}
					src={fileURL || DEFALUT_IMAGE}
					alt="profile photo"
				></img>
				<div className={styles.detail}>
					<p className={styles.name}>{Name}</p>
					<p className={styles.company}>{Company}</p>
					<p className={styles.role}>{Role}</p>
					<p className={styles.statement}>{Statement}</p>
					<p className={styles.number}>{Number}</p>
					<p className={styles.email}>{Email}</p>
					<p className={styles.address}>{Address}</p>
				</div>
			</section>
			<button className={styles.button} onClick={onHideButtonClick}>
				{hideorShowMessage}
			</button>
		</div>
	);
});

export default Preview;
