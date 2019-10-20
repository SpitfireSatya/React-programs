
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 835229a505a038203057fc4cbedc974c067600321a6e24e2e5ee03466f7f8815'
  }
})
