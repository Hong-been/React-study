import React, { memo } from "react";
import styles from "./maker.module.css";
import InputBox from "../input_box/input_box";
import Preview from "../preview/preview";

const Maker = memo((props) => {
	return (
		<li className={styles.maker}>
			<button className={styles.delete}>X</button>
			<Preview />
			<InputBox />
		</li>
	);
});

export default Maker;
