import React, { memo } from "react";
import styles from "./card_item.module.css";

const CardItem = memo(() => {
	return (
		<li className={styles.card}>
			<div className={styles.front}>
				<img className={styles.img}></img>
				<div className={styles.detail}>
					<p className={styles.name}>이아영</p>
					<p className={styles.company}>Uber</p>
					<p className={styles.role}>Copywriter</p>
					<p className={styles.statement}>기술 카피라이터</p>
				</div>
			</div>
			<div className={styles.back}>
				<p className={styles.name}>이아영</p>
				<p className={styles.description}>
					프리랜서로 일하는 기술전문 카피라이터입니다. 수년간 ...
				</p>
				<div className={styles.detail}>
					<p className={styles.number}>+82 0000 0000</p>
					<p className={styles.email}>a-young@gmail.com</p>
				</div>
			</div>
		</li>
	);
});

export default CardItem;
