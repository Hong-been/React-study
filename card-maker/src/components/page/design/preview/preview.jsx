import React, { memo, useEffect, useRef, useState } from "react";
import styles from "./preview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DEFALUT_IMAGE = "./default.png";
const HIDE_MESSAGE = "Hide Image";
const SHOW_MESSAGE = "Show Image";

const Preview = memo(({ card }) => {
	const { Name, Company, Role, Address, Position, Number, Email, fileURL } =
		card;
	const [isHiddenActive, setIsHiddenActive] = useState(false);
	const [hideorShowMessage, setHideorShowMessage] = useState(HIDE_MESSAGE);

	useEffect(() => {
		setIsHiddenActive(false);
	}, [fileURL]);

	useEffect(() => {
		if (isHiddenActive) {
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
				<div className={styles.detail}>
					<img
						className={
							isHiddenActive ? (styles.img, styles.hidden) : styles.img
						}
						src={fileURL || DEFALUT_IMAGE}
						alt="profile photo"
					></img>
					<div className={styles.top}>
						<div className={styles.person}>
							<span className={styles.position}>{Position}</span>
							<span className={styles.name}>{Name}</span>
						</div>
						<div className={styles.companyInfo}>
							<span className={styles.company}>{Company}</span>
							<span className={styles.role}>{Role}</span>
						</div>
					</div>
					<div className={styles.bottom}>
						<span className={styles.address}>
							<FontAwesomeIcon icon="map-marker-alt" />
							{`  ${Address}`}
						</span>
						<span className={styles.number}>
							<FontAwesomeIcon icon="phone-alt" />
							{`  ${Number}`}
						</span>
						<span className={styles.email}>
							<FontAwesomeIcon icon="envelope" />
							{`  ${Email}`}
						</span>
					</div>
				</div>
			</section>
			<button className={styles.button} onClick={onHideButtonClick}>
				{hideorShowMessage}
			</button>
		</div>
	);
});

export default Preview;
