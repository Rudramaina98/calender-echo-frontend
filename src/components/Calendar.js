import {useState, useEffect} from 'react';
import apiService from "../services/apiService";

const Calender = ({userId = '12345abcde'}) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
          const data = await apiService.getEvents(userId);
          setEvents(data);
        };
        fetchEvents();
      }, [userId]);

    return (
        <div>
            <h2>Events</h2>
                <ul>
                {events.map(({ _id, title, start }) => (
                <li key={_id}>
                    {title} - {new Date(start).toLocaleString()}
                </li>
                ))}
                </ul>
        </div>
    )
}

export default Calender;