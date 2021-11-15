//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customGreeting = {
  color: ""
};

console.log(currentTime);
if (currentTime < 12) {
  greeting = "Good Morning";
  customGreeting.color = "red";
} else if (currentTime >= 12 && currentTime <= 17) {
  greeting = "Good Afternoon";
  customGreeting.color = "green";
} else if (currentTime > 17 && currentTime <= 24) {
  greeting = "Good Evening";
  customGreeting.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customGreeting}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
