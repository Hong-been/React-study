import axios from "axios";

class Youtube{
  constructor(key){
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key },
    });
  }

  async mostPopular(){
    try {
      const response = await this.youtube.get('videos',{
        params: {
          part : 'snippet',
          chart: 'mostPopular',
          maxResults : 25,
        }
      });
      return response.data.items;
    } catch (error) {
      return console.log('error', error);
    }
  }

  async search(query){
    try {
      const response = await this.youtube.get('search',{
        params: {
          part : 'snippet',
          chart: 'mostPopular',
          q: query,
          type: 'video',
          maxResults : 25,
        }
      });
      return response.data.items.map(item => ({...item, id: item.id.videoId}));
    } catch (error) {
      return console.log('error', error);
    }
  }
}

export default Youtube;