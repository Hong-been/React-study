import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
  window.scrollTo(0, 0);
	const { title, channelTitle, description, tags } = snippet;

	return (
		<article className={styles.detail}>
			<iframe
        className={styles.video}
				id="ytplayer"
				type="text/html"
				width="100%"
				height="405"
				src={`https://www.youtube.com/embed/${video.id}`}
				frameBorder="0"
				allowFullScreen
        autoPlay="1"
			></iframe>
      <div className={styles.tags}>{tags && tags.map((tag) => `#${tag} `)}</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.channel}>{channelTitle}</div>
			<pre className={styles.description}>{description}</pre>
		</article>
	);
};
export default VideoDetail;
