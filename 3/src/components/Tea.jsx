import React from "react";

const Tea = ({ name, temp, time, handleClick }) => {
  const toMinutes = (seconds) => {
    let minutes = seconds / 60;
    return Math.round(minutes * 100) / 100;
  };
  return (
    <>
      <div
        className="singleTea"
        onClick={() => handleClick(name, toMinutes(Number(time)).toFixed(1))}
      >
        <div className="description">
          <div>{name}</div>
          <div>
            Brew With {temp}°C Water For {time}S
          </div>
        </div>
        <div className="timing">
          <div>{temp}</div>
          <div>{toMinutes(Number(time))}</div>
        </div>
      </div>
    </>
  );
};

export default Tea;
