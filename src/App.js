import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from './layout'
import { Home, HousePoint, Behaviour} from './pages'

function App() {
  const [achieveCount, setAchieveCount] = useState(0)
  const [behaviourCount, setBehaviourCount] = useState(0)

  const data = [
    {id: 1, name: 'Alice', ach: 0, beh: 0},
    {id: 2, name: 'Bob', ach: 0, beh: 0},
    {id: 3, name: 'Carl', ach: 0, beh: 0}
  ];

  const [students, setStudents] = useState(data)


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
        {/* {students.map((student, index) => {
          return (
            <div key={index}>
              <h2>name: {student.name}</h2>
              <h2>ach: {student.ach}</h2>
              <h2>beh: {student.beh}</h2>
            </div>
          );
        })} */}
        
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
