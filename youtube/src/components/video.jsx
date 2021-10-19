import styles from "./video.module.css";
import React from 'react';

const Video = (props) => {
  const {title, channelTitle, description, tags} = props.video.snippet;
  const {url,height,width} = props.video.snippet.thumbnails.medium;
  
  return (
    <li className={styles.video} width={width}>
      <img className={styles.thumbnail} src={url} alt="thumbnail" width={width} height={height}></img>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.channel}>{channelTitle}</span>
      </div>
    </li>
  );

};

export default Video;
