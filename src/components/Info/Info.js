import React from 'react';
import './Info.css';
import bg from '../../img/bg-shape.svg';

const Info = ({ tempUnit, setTempUnit }) => {
  // props.tempUnit
  // props.setTempUnit
  return (
    <section className='container'>
      <div className='text-block'>
        <h1>WEATHER<br/>BACK<span className='accent'>HOME</span></h1>
        <hr/>
        <p>
          A minimal weather app for people who based in NYC and BKK.<br/>
          Designed to brighten your day!
        </p>
      </div>

      <div className='action-block'>
        <p>
          Your weather is currently showing in:
        </p>
        <div className='buttons-wrapper'>
          <div className='btn'>
          { tempUnit === 'C' ?
            <button className='active'>C</button>
            :
            <button onClick={setTempUnit}>C</button>
          }
            <p>Celsius</p>
          </div>
          <div className='btn'>
          { tempUnit === 'F'  ?
            <button className='active'>F</button>
            :
            <button onClick={setTempUnit}>F</button>
          }
            <p>Fahrenheit</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info;