import React, { useEffect, useState } from "react";
import "./app.css";
import Videos from "./components/videos";
import SearchBar from "./components/searchBar";

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

  const handleSubmit = (keyword) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyBUzWqXCNnWzk3LYPhmwXUMMEuTac0evrA `, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };
  

	return (
		<>
      <SearchBar onSubmit={handleSubmit}/> 
			<Videos videos={videos}/>
		</>
	);
}

export default App;
