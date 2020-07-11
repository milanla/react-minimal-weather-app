import React, { useState, useEffect } from 'react';
import './App.css';
import Info from './components/Info/Info'
import Card from './components/Card/Card';

const App = () => {
  let [tempUnit, setTempUnit] = useState('F');
  let [cities, setCities] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/group?id=5128581,1609350&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
      const data = await response.json()
      setCities(data.list);
    })()
  }, []);

  return (
    <main>
      <Info 
        tempUnit={tempUnit} 
        setTempUnit={() => setTempUnit(tempUnit === 'F' ? 'C' : 'F')} 
      />
      <Card city={cities[0]} tempUnit={tempUnit}/>
      <Card city={cities[1]} tempUnit={tempUnit}/>
    </main>
  );
}

export default App;
