import { displayDate } from "./main.js";

export function generateNewDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const fullDate = new Date();

  const day = fullDate.getDay();
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const year = fullDate.getFullYear();

  const dateToDisplay = `${months[month]} ${date} ${year}`;
  const dayToDisplay = days[day];

  console.log(dayToDisplay, dateToDisplay);
  displayDate(dayToDisplay, dateToDisplay);
}

generateNewDate();
