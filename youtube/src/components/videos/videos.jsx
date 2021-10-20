import React from "react";
import styles from "./videos.module.css";
import Video from "../video/video";

const Videos = ({videos, onVideoClick, display}) => {
	const displayType = display === 'list' ? styles.list : styles.grid; 

	return (
		<>
			<ul className={`${styles.videos} ${displayType}`}>
				{videos.map((video) => {
				const id = video.id.videoId ? video.id.videoId : video.id;
        
				return <Video key={id} video={video} onVideoClick={onVideoClick} display={display}/>
				})}
			</ul>
		</>
)};

export default Videos;
