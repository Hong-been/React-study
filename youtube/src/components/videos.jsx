import React from 'react';
import styles from "./videos.module.css";
import Video from "./video";


const Videos = (props) => (
      <>
        <ul className={styles.videos}>
          {props.videos.map(video => (
            <Video video={video}/>
          ))}
        </ul>
      </>
  );

export default Videos;
