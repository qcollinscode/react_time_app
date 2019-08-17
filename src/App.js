import React from 'react';
import './App.css';

function App() {
    const date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes();
    let timeOfDay,
        style = {};


    if (hours < 12) {
      timeOfDay = "Morning";
      style.backgroundColor = "#3498db";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon";
      style.backgroundColor = "#f1c40f";
    } else {
      timeOfDay = "Night";
      style.backgroundColor = "#2c3e50";
    }



    return (
      <div className="App">
        <h1 style={style}> Good {timeOfDay}! </h1>
        <h4>It's {hours}:{minutes}</h4>
      </div>
    );
}

export default App;
