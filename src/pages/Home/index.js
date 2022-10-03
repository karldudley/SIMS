import React from 'react'

function Home({ achieveCount, behaviourCount }) {
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
