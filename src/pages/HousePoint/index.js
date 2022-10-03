import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function HousePoint() {
  const achieveCount = useSelector(state => state.ach)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: "ADD_ACH" })
  }
  
  return (
    <>
    {achieveCount} achievement points
      <button 
        onClick={handleClick}
        aria-label="Read Story">
        Add Achievement Point
      </button>
    </>
  );
}

export default HousePoint;
