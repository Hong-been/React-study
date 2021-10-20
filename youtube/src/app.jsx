import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Videos from "./components/videos/videos";
import SearchBar from "./components/searchBar/searchBar";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

  const getPopular = useCallback(
    () => {
      setSelectedVideo(null);
      youtube
        .mostPopular()//
        .then(setVideos);
    },[youtube]);

  const search = useCallback(
    (query) => {
      youtube
        .search(query)//
        .then(videos => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },[youtube]);
  
  const selectVideo = useCallback(
    (video) => {
      setSelectedVideo(video);
    },[]);

  useEffect(getPopular, [getPopular]);

	return (
		<>
      <SearchBar onSubmit={search} onHomeClick={getPopular}/>
      <main className={styles.contents}>
        {selectedVideo && (
          <section className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </section>
        )}
        <section className={styles.list}>
          <Videos videos={videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
        </section>
      </main>
		</>
	);
}

export default App;
