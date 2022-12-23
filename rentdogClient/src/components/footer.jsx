import axios from 'axios'
import React, { useState } from 'react'

const Footer = () => {
    const [weather, setWeather] = useState("");
    const [temperature, setTemperature] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=475b041832b83a6a486d96e86bbab745&units=metric`

    axios(url)
        .then((resp) => {
            setWeather(resp.data.weather[0].description)
            setTemperature(resp.data.main.temp)
        })
        .catch(err => console.log(err))

    return (<div>
        <footer className="text-center">
            <p>Weather: {weather} / Temperature: {temperature}</p>
            <p>Copyrigth: Andre Piccolo - 300347025 - 2022</p>
        </footer>
    </div>);
}

export default Footer;