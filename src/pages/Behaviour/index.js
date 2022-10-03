import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Behaviour() {
  const behaviourCount = useSelector(state => state.beh)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({ type: "ADD_BEH" })
  }

  return (
    <>
      {behaviourCount} behaviour points
      <button 
        onClick={handleClick}
        aria-label="Read Story">
        Add Behaviour Point
      </button>
    </>
  );
}

export default Behaviour;
