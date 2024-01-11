// import React from 'react';
import './App.css';
import HomeComponent from '../src/Components/HomeComponent'
 import QuizComponent from '../src/Components/quizComponent'
 import ResultComponent from '../src/Components/result.Component'

function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent />
      <ResultComponent />
    </div>
  )
}

export default App;