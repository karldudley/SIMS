import React from 'react'

function Behaviour({ behaviourCount, handleCount }) {
  return (
    <>
      {behaviourCount} behaviour points
      <button 
        onClick={handleCount}
        aria-label="Read Story">
        Add Behaviour Point
      </button>
    </>
  );
}

export default Behaviour;
