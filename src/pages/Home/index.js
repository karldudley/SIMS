import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
  const achieveCount = useSelector(state => state.ach)
  const behaviourCount = useSelector(state => state.beh)

  return (
    <>
    <h1>{achieveCount} achievement points</h1>
    <h3>+</h3>
    <h1>{behaviourCount} behaviour points</h1>
    <h3>=</h3>
    <h1>{achieveCount - behaviourCount} overall points</h1>
    </>
  );
}

export default Home;
