import React, { memo } from "react";
import styles from "./preview.module.css";

const Preview = memo(() => {
	return (
		<section className={styles.card}>
			<img className={styles.img}></img>
			<div className={styles.detail}>
				<p className={styles.name}>이아영</p>
				<p className={styles.company}>Uber</p>
				<p className={styles.role}>Copywriter</p>
				<p className={styles.statement}>기술 카피라이터</p>
				<p className={styles.number}>+82 0000 0000</p>
				<p className={styles.email}>a-young@gmail.com</p>
			</div>
		</section>
	);
});

export default Preview;
