import React, { memo } from "react";
import styles from "./input_list.module.css";
import InputBox from "../input_box/input_box";

const InputList = memo((props) => {
	return (
		<ul className={styles.inputlist}>
			<InputBox />
		</ul>
	);
});

export default InputList;
