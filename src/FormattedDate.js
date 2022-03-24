import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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
  let year = props.date.getFullYear();
  let month = months[props.date.getMonth()];
  let currentDate = props.date.getDate();
  let day = days[props.date.getDay()];
  let hour = ("0" + props.date.getHours()).slice(-2);
  let minutes = ("0" + props.date.getMinutes()).slice(-2);

  return (
    <div>
      {month} {currentDate}, {year}
      <br />
      {day} {hour}:{minutes}
    </div>
  );
}
