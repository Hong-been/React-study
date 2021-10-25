import React, { memo, useEffect, useState } from "react";
import styles from "./preview.module.css";

const DEFALUT_IMAGE = "./default.png";
const Preview = memo(({ card, cardId, userId, cardRepository }) => {
	const { Name, Company, Role, Address, Statement, Number, Email, imgURL } =
		card;
	const url = imgURL || DEFALUT_IMAGE;
	return (
		<section className={styles.card}>
			<img className={styles.img} src={url} alt="profile photo"></img>
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
	);
});

export default Preview;
