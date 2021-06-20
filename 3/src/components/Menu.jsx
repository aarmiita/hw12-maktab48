import React, { useState, useEffect } from "react";
import Data from "./data/data.json";
import Tea from "./Tea";

const Menu = () => {
  const [teaList, setTeaList] = useState([]);
  const [title, setTitle] = useState("Choose a Tea");
  const [timer, setTimer] = useState("0.0");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // const timerSeconds = seconds < 10 && seconds !== 0 ? `0${seconds}` : seconds;
  const handleClick = (name, time) => {
    setTitle(name);
    let newTimer = time.split(".");
    setMinutes(Number(newTimer[0]));
    setSeconds(Number(newTimer[1]));
  };
  useEffect(() => {
    startTimer();
  }, [seconds]);
  const startTimer = () => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          console.log("hello");
        }
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
  };
  const cancel = () => {};
  const getData = () => {
    setTimeout(() => {
      console.log("Our data is fetched");
      setTeaList(Data);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="menu">
        <div className="header">
          <h2>{title}</h2>
          <h1>
            {minutes}.{seconds} min's left
          </h1>
        </div>
        {teaList.map((tea, index) => {
          return (
            <Tea
              key={index}
              name={tea.name}
              temp={tea.temp}
              time={tea.time}
              handleClick={handleClick}
            />
          );
        })}
        <div className="startTimer">
          <div>
            <button className="statr-timer" onClick={startTimer}>
              Start Timer{" "}
            </button>
            <button className="cancel" onClick={cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
