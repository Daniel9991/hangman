import { useState } from 'react'
import Button from '../../components/button/button'
import WordAndLetters from './word-and-letters'
import Hearts from './hearts'
import StoryImage from './story-image'
import './play.css'
import { getWord } from '../../services/get-word'
import { getRandomIndex } from '../../utils/utils'

export default function PlayPage({
  navigateToAbout,
  navigateToLogin,
  score,
  increaseScore
}){

  const [word, setWord] = useState(getWord())
  const [wordLetters, setWordLetters] = useState(
    Array.from(word.split('')).map(letter => ({letter, found: false}))
  )

  const lives = 5
  const [lostLives, setLostLives] = useState(0)

  const [gameNum, setGameNum] = useState(1)

  const gameFinished = lives === lostLives || wordLetters.every(wordLetter => wordLetter.found)

  function checkLetter(letter){
    // Word contains letter
    if(word.split('').includes(letter)){
      setWordLetters(wordLetters.map(wordLetter => wordLetter.letter !== letter ? wordLetter : {letter, found: true}))
    }
    else{
      setLostLives(lostLives + 1)
    }
  }

  function onRestart(){
    setLostLives(0)
    setWordLetters(word.split('').map(letter => ({letter, found: false})))
    setGameNum(gameNum + 1)
    increaseScore(-score)
  }

  function onNew(){
    let newWord = word
    while(newWord === word){
      newWord = getWord()
    }
    setWord(newWord)
    setLostLives(0)
    setWordLetters(newWord.split('').map(letter => ({letter, found: false})))
    setGameNum(gameNum + 1)

    if(gameFinished)
      increaseScore((lives - lostLives) * 10)
  }

  function onHint(){
    const remainingLetters = wordLetters.filter(wordLetter => !wordLetter.found)
    const randomIndex = getRandomIndex(remainingLetters.length)
    const revealedLetter = remainingLetters[randomIndex]
    setLostLives(lostLives + 2)
    setWordLetters(wordLetters.map(wordLetter => wordLetter.letter === revealedLetter.letter ? ({letter: revealedLetter.letter, found: true}) : wordLetter))
  }

  return (
    <div className='page'>
      {gameFinished && (
        <section className="modal">
          <article className="modal-box">
            {lives === lostLives ? "You let the man die. Your score was reset." : "You set him free!"}
            <Button onClick={onNew}>New</Button>
          </article>
        </section>
      )}
      <div className='non-footer'>
        <header className="header">
          <span className="score">Score: {score}</span>
          <h1 className='heading'>Hangman</h1>
          <nav className='navbar'>
            <span onClick={navigateToLogin} className='navbar-link' href="#">Log In</span>
            <span onClick={navigateToAbout} className='navbar-link' href="#">About</span>
          </nav>
        </header>
        <main className=''>
          <section className='play-prompts-wrapper'>
            <p className="play-prompt">Decipher the code.</p>
            <p className="play-prompt">Save this poor man&apos;s life.</p>
          </section>
          <section>
            <Hearts amount={lives} lostAmount={lostLives} />
          </section>
          <div className='game-controls-wrapper'>
            <WordAndLetters key={gameNum} wordLetters={wordLetters} checkLetter={checkLetter} />
            <StoryImage />
          </div>
        </main>
      </div>
      <footer>
        <div className='footer-buttons-wrapper'>
          <Button onClick={onNew}>New</Button>
          <Button onClick={onRestart}>Restart</Button>
          <Button disabled={lives - lostLives <= 2} onClick={onHint}>Hint</Button>
        </div>
      </footer>
    </div>
  )
} 