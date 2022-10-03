import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './layout'
import { Home, HousePoint, Behaviour} from './pages'

function App() {
  const [achieveCount, setAchieveCount] = useState(0)
  const [behaviourCount, setBehaviourCount] = useState(0)

  const onAchievementClick = () => {
    setAchieveCount(prevCount => prevCount + 1)
  }

  const onBehaviourClick = () => {
    setBehaviourCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home achieveCount = {achieveCount} behaviourCount = {behaviourCount} />} />
          <Route path="/housepoint" element={<HousePoint achieveCount = {achieveCount} handleCount = {onAchievementClick}/>} />
          <Route path="/behaviour" element={<Behaviour behaviourCount = {behaviourCount} handleCount = {onBehaviourClick}/>} />
        </Routes>
      </div>
      <Footer />
      </>
  );
}

export default App;
