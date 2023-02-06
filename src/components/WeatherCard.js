import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { getWeather } from "../services/ToolsService";

function WeatherCard() {

  

var cities = ["Tokyo", "Delhi", "Shanghai", "Mexico City", "Quebec", "Sao Paulo", "Mumbai", "Beijing", "Osaka", "Cairo", "Kolkata", 
"Los Angeles", "Dhaka", "Buenos Aires", "Rio de Janeiro","Moscow","Istanbul","Karachi","Paris","Nagoya","Chicago","Lagos","Seoul","Guangzhou","Shenzhen","Jakarta","London","New York City","Bangalore","Lima","Bogota"];
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  


  function handleChange(city) {
    setLocation(city);
    getWeather(city).then((response) => {
      setTemperature(response['current']['temp_c']);
      setHumidity(response['current']['humidity']);
      setWindSpeed(response['current']['wind_kph']);
    })

  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={5}>
        <CardContent>
          <Typography sx={{mb: 3}} gutterBottom variant="h5" component="div">
            Actual weather
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Age"
              onChange={(e) => handleChange(e.target.value)}
            >
            {
              cities.sort().map((city) => (<MenuItem key={city} value={city}>{city}</MenuItem>))
            }
              
            </Select>
          </FormControl>

          <div className="weather-details">
            <p>
              <strong>Temperature:</strong> {temperature}°C
            </p>
            <p>
              <strong>Humidity:</strong> {humidity}%
            </p>
            <p>
              <strong>Wind Speed:</strong> {windSpeed} kph
            </p>
          </div>
        </CardContent>
      </Card> 
      
    </div>
  )
}
export default WeatherCard;