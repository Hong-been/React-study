import styles from "./video.module.css";
import React, { memo } from 'react';

const Video = memo(
  ({video, video:{snippet}, onVideoClick, display}) => {
    const displayType = display === 'list' ? styles.list : styles.grid; 
    const {title, channelTitle} = snippet;
    const {url} = snippet.thumbnails.medium;
    
    return (
      <li className={`${styles.video} ${displayType}`} onClick={()=>onVideoClick(video)}>
        <img className={styles.thumbnail} src={url} alt="thumbnail"></img>
        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </li>
    );
  }
);

export default Video;
