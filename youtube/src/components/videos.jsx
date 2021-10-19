import React from 'react';
import styles from "./videos.module.css";
import Video from "./video";
import SearchBar from "./searchBar";

const Videos = (props) => (
      <>
        <SearchBar />
        <ul className={styles.videos}>
          {props.videos.map(video => (
            <Video video={video}/>
          ))}
        </ul>
      </>
  );

export default Videos;


//const { title, channelTitle, description, tags } = this.props.snippet;
//const { url } = this.props.snippet.thumbnails.default;
