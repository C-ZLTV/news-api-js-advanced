import { fetchTenStories } from "./stories.js";

import { getCitiesWeather } from "./weather.js";

import { generateNewDate } from "./date.js";

//VIEW

//Stories
const loadMoreBtn = document.querySelector("#load-more-btn");
const newsWrapper = document.querySelector("#news-wrapper");
const displayedStoriesEL = document.querySelector("#displayed-stories");
const totalStoriesEl = document.querySelector("#total-stories");
const newSection = document.querySelector(".news-section");

totalStoriesEl.innerText = "500";

export function displayTenStories(array) {
  array.forEach((story) => {
    const unixTimestamp = story.time;
    const date = new Date(unixTimestamp * 1000).toDateString();

    const html = `
        <div class="story">
            <a class="story-title" href="${story.url}">${story.title}</a>
            <p class="story-date">${date}</p>
            <p class="story-author">Author: ${story.by}</p>
        </div>`;
    newsWrapper.insertAdjacentHTML("beforeend", html);
  });
}

export function displayError() {
  const errorHtml = `
      <div class="error-message">
          <p>Something went wrong.</p>
          <p>Please reload the page.</p>
      </div>
      `;
  newSection.innerHTML = errorHtml;
}

//Weather

const weatherWrapper = document.querySelector("#weather-wrapper");

export function displayWeather(array) {
  array.forEach((city) => {
    let cityName = "";
    if (city.latitude === 41.89) {
      cityName = "Rome";
    } else if (city.latitude === 45.46) {
      cityName = "Milan";
    } else if (city.latitude === 40.85) {
      cityName = "Naples";
    } else if (city.latitude === 45.06) {
      cityName = "Turin";
    } else if (city.latitude === 44.4) {
      cityName = "Genoa";
    } else if (city.latitude === 38.13) {
      cityName = "Palermo";
    } else {
      cityName = "";
    }

    const html = `
          <div class="weather">
            <span class="city">${cityName}:</span>
            <span class="temp">${Math.ceil(
              city.current_weather.temperature
            )}</span>
            <span class="celsius">C&deg;</span>
          </div>`;

    weatherWrapper.insertAdjacentHTML("beforeend", html);
  });
}

//Date

export function displayDate(day, date) {
  const dateWrapper = document.querySelector("#date-wrapper");

  const html = `
      <p class="week-day">${day}</p>
      <p class="full-date">${date}</p>
  `;

  dateWrapper.innerHTML = html;
}

//CONTROLLER

//Stories
let currentIndex = 0;

window.onload = function () {
  fetchTenStories(currentIndex);
  displayedStoriesEL.innerText = (currentIndex + 1) * 10;
};

let loadMore = () => {
  fetchTenStories(currentIndex++);

  displayedStoriesEL.innerText = (currentIndex + 1) * 10;

  if (currentIndex === 49) {
    loadMoreBtn.removeEventListener("click", loadMore);
    loadMoreBtn.style.display = "none";
  }
};

loadMoreBtn.addEventListener("click", loadMore);
