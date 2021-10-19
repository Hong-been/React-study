import React from "react";
import styles from "./videos.module.css";
import Video from "../video/video";

const Videos = ({videos, onVideoClick, display}) => (
		<>
			<ul className={styles.videos}>
				{videos.map((video) => (
        <Video video={video} onVideoClick={onVideoClick} display={display}/>
				))}
			</ul>
		</>
);

export default Videos;
