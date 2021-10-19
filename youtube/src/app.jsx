import React, { useEffect, useState } from "react";
import "./app.css";
import Videos from "./components/videos";

function App() {
	const [videos, setVideos] = useState([]);

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

	return (
		<>
			<Videos videos={videos}/>
		</>
	);
}

export default App;
