import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { getWeather } from "../services/ToolsService";

function WeatherCard() {
  
  const [location, setLocation] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  


  function handleChange(city) {
    getWeather(city).then((response) => {
      setTemperature = response['age']
      setHumidity = response['age']
      setWindSpeed = response['age']
      setLocation = city;
    })

  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={5}>
        <CardContent>
          <Typography sx={{mb: 3}} gutterBottom variant="h5" component="div">
            Actual weather
          </Typography>
          <select onChange={(e) => handleChange(e.target.value)}>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>

          <div className="weather-details">
            <p>
              <strong>Temperature:</strong> {temperature}°F
            </p>
            <p>
              <strong>Humidity:</strong> {humidity}%
            </p>
            <p>
              <strong>Wind Speed:</strong> {windSpeed} mph
            </p>
          </div>
        </CardContent>
      </Card> 
      
    </div>
  )
}
export default WeatherCard;