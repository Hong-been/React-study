import styles from "./video.module.css";
import React from 'react';

const Video = ({video, video:{snippet}, onVideoClick, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid; 
  const {title, channelTitle} = snippet;
  const {url} = snippet.thumbnails.medium;
  
  return (
    <li className={`${styles.video} ${displayType}`} onClick={()=>onVideoClick(video)}>
      <img className={styles.thumbnail} src={url} alt="thumbnail"></img>
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.channel}>{channelTitle}</span>
      </div>
    </li>
  );

};

export default Video;
