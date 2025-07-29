import axios from 'axios';

const API_URL = 'http://localhost:8080/api/events';

const getEvents = async (userId) => {
    const { data } = await axios.get(`${API_URL}/${userId}`);
    return data;
  };

const apiService = {
    getEvents
}
export default apiService;
