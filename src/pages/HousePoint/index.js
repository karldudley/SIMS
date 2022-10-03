import React from 'react'

function HousePoint({ achieveCount, handleCount }) {
  return (
    <>
    {achieveCount} achievement points
      <button 
        onClick={handleCount}
        aria-label="Read Story">
        Add Achievement Point
      </button>
    </>
  );
}

export default HousePoint;
