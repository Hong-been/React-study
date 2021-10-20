import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Videos from "./components/videos/videos";
import SearchBar from "./components/searchBar/searchBar";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(()=>{
    youtube
      .mostPopular()//
      .then(setVideos);
	}, []);

  const search = (query) => {
    youtube
      .search(query)//
      .then(setVideos)
      .then(()=>setSelectedVideo(null));
  };
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

	return (
		<>
      <SearchBar onSubmit={search} onVideoClick={selectVideo}/>
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
