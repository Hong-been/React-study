import React, { memo, useEffect, useState } from "react";
import styles from "./preview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HIDE_MESSAGE = "Hide Image";
const SHOW_MESSAGE = "Show Image";

const Preview = memo(({ card }) => {
	const {
		Name,
		Company,
		Role,
		Address,
		Position,
		Number,
		Email,
		Color,
		fontColor,
		fileURL,
	} = card;
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
			<div
				className={styles.card}
				style={{ backgroundColor: Color }}
			>
				<div className={styles.imgContainer}>
					{!isHiddenActive && fileURL ? (
						<img className={styles.img} src={fileURL} alt="profile"></img>
					) : (
						<div className={styles.img} alt="profile"></div>
					)}
				</div>
				<div className={styles.detail} style={{ color: fontColor }}>
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
						{Address && (
							<span className={styles.address}>
								<FontAwesomeIcon
									className={styles.icon}
									icon="map-marker-alt"
								/>
								{Address}
							</span>
						)}
						{Number && (
							<span className={styles.number}>
								<FontAwesomeIcon className={styles.icon} icon="phone-alt" />
								{`${Number}`}
							</span>
						)}
						{Email && (
							<span className={styles.email}>
								<FontAwesomeIcon className={styles.icon} icon="envelope" />
								{Email}
							</span>
						)}
					</div>
				</div>
			</div>
			<button className={styles.button} onClick={onHideButtonClick}>
				{hideorShowMessage}
			</button>
		</div>
	);
});

export default Preview;
