import React from 'react'
import './styles.css';
import { Button } from 'semantic-ui-react';
// import { Card } from 'semantic-ui-react';

export const Weather = ({weatherData}) => {
    const day = new Date().getDay();
    const date = new Date().getDate();
    const mon = new Date().getMonth();
    const year = new Date().getFullYear();
    let dayname;
    switch(day) {
        case 1:
            dayname="Monday";
            break;
        case 2:
            dayname="Tuesday";
            break;
        case 3:
            dayname="Wednesday";
            break;
        case 4:
            dayname="Thursday";
            break;
        case 5:
            dayname="Friday";
            break;
        case 6:
            dayname="Saturday";
            break;
        case 7:
            dayname="Sunday";
            break;
        default:
            break;
    }
    const refresh = () => {
        window.location.reload();
      }
    return (
        <div className='main'>
            <div className='top'>
                <div className='header'>{weatherData.name}</div>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>
                
                <div className='flex'>
                    <p className='day'>Day: {dayname}</p>
                    <p className='day'>{date}/{mon+1}/{year}</p>
                </div>
                <div className='flex'>
                    <p className='temp'>Temperature: {weatherData.main.temp} &deg;C</p>
                    <p className='temp'>Humidity: {weatherData.main.humidity} %</p>
                </div>
                <div className="flex">
                    <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                </div>
        </div>
    )
}
