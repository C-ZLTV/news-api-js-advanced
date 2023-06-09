import { displayWeather } from "./main.js";

//MODEL
const coordinates = [
  { city: "Rome", lat: 41.89, long: 12.51 },
  { city: "Milan", lat: 45.46, long: 9.19 },
  { city: "Naples", lat: 40.85, long: 14.27 },
  { city: "Turin", lat: 45.06, long: 7.69 },
  { city: "Genoa", lat: 44.4, long: 8.94 },
  { city: "Palermo", lat: 38.13, long: 13.34 },
];

async function getWeather(lat, long) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weathercode&current_weather=true&timeformat=unixtime&forecast_days=1&timezone=Europe%2FBerlin`
  );

  const data = await response.json();

  return data;
}

export async function getCitiesWeather() {
  let weatherPromises = coordinates.map((city) => {
    return getWeather(city.lat, city.long);
  });

  let weather = await Promise.all(weatherPromises);

  displayWeather(weather);

  return weather;
}

getCitiesWeather();
