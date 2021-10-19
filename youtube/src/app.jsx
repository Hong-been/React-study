import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Videos from "./components/videos/videos";
import SearchBar from "./components/searchBar/searchBar";
import VideoDetail from "./components/video_detail/video_detail";

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(()=>{
		const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyBUzWqXCNnWzk3LYPhmwXUMMEuTac0evrA ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
	}, []);


  const handleSubmit = (keyword) => {
    setSelectedVideo(null);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyBUzWqXCNnWzk3LYPhmwXUMMEuTac0evrA `, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

	return (
		<>
      <SearchBar onSubmit={handleSubmit}/>
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
