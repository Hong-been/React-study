import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
	const { title, channelTitle, description, tags } = snippet;

	return (
		<main className={styles.detail}>
			<iframe
        className={styles.video}
				id="ytplayer"
				type="text/html"
				width="100%"
				height="405"
				src={`https://www.youtube.com/embed/${video.id}`}
				frameborder="0"
				allowfullscreen
			></iframe>
			<div className={styles.title}>{title}</div>
			<div className={styles.channel}>{channelTitle}</div>
			<p className={styles.description}>{description}</p>
			<div className={styles.tags}>{tags && tags.map((tag) => `#${tag} `)}</div>
		</main>
	);
};
export default VideoDetail;
