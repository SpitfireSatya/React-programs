
import axios from 'axios';

const API_KEY = 'AIzaSyArM1pHMRtyTXocLdXqSnsVhsoZNpIIS4o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: API_KEY
  }
});
