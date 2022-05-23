import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');



  const url = `https://api.weatherapi.com/v1/current.json?key=6faf5b59cfb64658aec193453222305&q=${location}&aqi=no`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((response) => {
        setData(response.data);
      });
    }
  }
  

  return (
    <div className="App">
      <input value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location Here'
        type="text" autoFocus/>
        {data.current ? <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1" id='data1'>Location: {location}</h3> : null}
        {data.current ? <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1" id='data2'>UV: {data.current.uv}</h3> : null}
        {data.current ? <h3 className="u-custom-font u-font-oswald u-text u-text-default u-text-1" id='data3'>Last Updated: {data.current.last_updated}</h3> : null}
    </div>
  );
}

export default App;
