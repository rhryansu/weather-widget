import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CardsList from './components/card-list.component';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [uv, setUv] = useState(0);
  const [last_updated, setLast_updated] = useState('');
  const [cards, setCards] = useState([]);

  const url = `https://api.weatherapi.com/v1/current.json?key=6faf5b59cfb64658aec193453222305&q=${location}&aqi=no`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data);
        setUv(response.data.current.uv);
        setLast_updated(response.data.current.last_updated);
        cardFilter(response.data.current.uv);
      });
    }
  };
  
  const cardFilter = (uv) => {
    
    let cards = [];
    if (uv < 3) {
      cards = [1,2];
    } else if (uv > 3) {
      cards = [1,2,3,4];
    } else {
      cards = [1,2,3];
    }
    
    setCards(cards);
    
  };

  // Force re-render the uv and the update timestamp when the location changes
  useEffect(() => {
    // console.log('success')
  }, [uv, last_updated, cards]);

  return (
    <div className="App">
      <input value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location Here'
        type="text" autoFocus/>
        {data.current ? <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1" id='data1'>Location: {location}</h3> : null}
        {data.current ? <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1" id='data2'>UV: {uv}</h3> : null}
        {data.current ? <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1" id='data3'>Last Updated: {last_updated}</h3> : null}

        <CardsList cards={cards}/>
    </div>
  );
}

export default App;
