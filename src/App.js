import React, { useState } from 'react';
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// import nature from './images/nature.jpg';
import Cityinfocompo from "./modules/Cityinfocompo";
import WeatherComponent from "./modules/Weatherinfocompo";
import axios from 'axios';

export const Weatherlogos = {
  "01d": "/images/sunny.png",
  "01n": "/images/night.png",
  "02d": "/images/happy-day.png",
  "02n": "/images/cloudy-night.png",
  "03d": "/images/cloudy.png",
  "03n": "/images/cloudy-dark.png",
  "04d": "/images/cloudy.png",
  "04n": "/images/cloudy-night.png",
  "09d": "/images/day-rain.png",
  "09n": "/images/night-rain.png",
  "10d": "/images/day-rain.png",
  "10n": "/images/night-rain.png",
  "11d": "/images/thunder.png",
  "11n": "/images/thunder.png",
  "13d":"/images/snow.png",
  "13n":"/images/night-snow.png",
  "50d":"/images/mist.png",
  "50n":"/images/mist.png",
};
const API_key="f923c3d7ee419351af2153ddac156785";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url('/images/nature.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    // background-position: center center;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background: rgba(255, 255, 255, 0.5); /* Adjust the alpha value (0.5) as needed */
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  font-family: 'Lato', sans-serif;
`;


const Applabel = styled.span`
color:black;
font-size: 18px;
font-weight:bold
`;

function App() {
  const [city, updatecity]= useState();
  const [weather, updateweather] = useState();
  
  const fetchweather=async(e)=>{
    e.preventDefault();
    /* For Fetching from Api We are using axios */
    const respose=
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    updateweather(respose.data);
  };
  return (
    <>
    <GlobalStyle></GlobalStyle>
      {/* Rest of your app components */}
      <Container>
        <Applabel>Weather App</Applabel>
        {/* this condition will help us when we write the name of city and get any data then it will move us to next page  */}
        {weather?(<WeatherComponent  weather={weather}/>):(<Cityinfocompo  updatecity={updatecity}  fetchweather={fetchweather}/>)}
       
      </Container>
    </>
  );
}

export default App;
