import React from 'react';
import './Card.css';
import cloudy from '../../img/cloudy-icon.svg';
import sun from '../../img/sun-icon.svg';
import rain from '../../img/rain-icon.svg';
import snow from '../../img/snow-icon.svg';
import nyc from '../../img/nyc.jpg';
import bkk from '../../img/bkk.jpg';

const Card = ({city, tempUnit}) => {
  let currentTemp = 0;
  let icon = cloudy

  if (city) {

    let fahrenheit = parseInt(city.main.temp)
    let celsius = parseInt((fahrenheit - 32) * (5 / 9))

    if (tempUnit === 'F') {
      currentTemp = fahrenheit
    } else {
      currentTemp = celsius
    }

    if (city.weather[0].main === 'Rain') {
      icon = rain
    } else if (city.weather[0].main === 'Clear') {
      icon = sun
    }else if (city.weather[0].main === 'Snow') {
      icon = snow
    }
  }

  return (
    <section>
      <div className='floater'>
        <div className='icon-temp'>
          <img src={icon} alt='weather-icon' />
          <p id='temp'>{city ? currentTemp : ''}°</p>
        </div>
        <p>{city ? city.weather[0].main.toUpperCase() : ''}</p>
      </div>
      { city && city.name === 'New York City' ?
        <img src={nyc} alt='New York' id='location-img'/>
        :
        <img src={bkk} alt='Bangkok' id='location-img'/>
      }
      <div className='location-info'>
        { city && city.name === 'New York City' ?
          <div>
            <p className='city'>New York</p>
            <p className='country'>NEW YORK</p>
          </div>
          :
          <div>
            <p className='city'>Bangkok</p>
            <p className='country'>THAILAND</p>
          </div>
        }
      </div>
    </section>
  )
}

export default Card;