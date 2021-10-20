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
				title="youtube video player"
				type="text/html"
				width="100%"
				height="540px"
				src={`https://www.youtube.com/embed/${video.id}`}
				frameBorder="0"
				allowFullScreen
        autoPlay="1"
			></iframe>
      <p className={styles.tags}>{tags && tags.map((tag) => `#${tag} `)}</p>
			<p className={styles.title}>{title}</p>
			<p className={styles.channel}>{channelTitle}</p>
			<pre className={styles.description}>{description}</pre>
		</article>
	);
};
export default VideoDetail;
