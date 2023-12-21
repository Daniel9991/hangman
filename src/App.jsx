import { useState } from 'react'

import PlayPage from './features/play/page'
import HomePage from './features/home/page'
import AboutPage from './features/about/page'
import LoginPage from './features/login/page'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState("home")
  const [score, setScore] = useState(0)

  function navigateToPlay(){ setCurrentPage("play") }
  function navigateToAbout(){ setCurrentPage("about") }
  function navigateToLogin(){ setCurrentPage("login") }

  function increaseScore(amount){
    setScore(score + amount)
  }

  return (
    <>
      {currentPage === "home" && (
        <HomePage
          navigateToPlay={navigateToPlay}
          navigateToLogin={navigateToLogin}
          navigateToAbout={navigateToAbout}
        />
      )}
      {currentPage === "play" && (
        <PlayPage
          navigateToLogin={navigateToLogin}
          navigateToAbout={navigateToAbout}
          increaseScore={increaseScore}
          score={score}
        />
      )}
      {currentPage === "about" && (
        <AboutPage
          navigateToPlay={navigateToPlay}
          navigateToLogin={navigateToLogin}
          score={score}
        />
      )}
      {currentPage === "login" && (
        <LoginPage
          navigateToPlay={navigateToPlay}
          navigateToAbout={navigateToAbout}
          score={score}
        />
      )}
    </>
  )
}

export default App
