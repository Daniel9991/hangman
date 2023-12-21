import { useState } from 'react'
import {LETTERS} from '../../constants/letters'
import './letter-button.css'
import './word-letters.css'

export default function WordAndLetters({wordLetters, checkLetter}){

  return (
    <section>
      <div className="word-letters-wrapper">
        {wordLetters.map((letter, index) => <WordLetter key={index} letter={letter} />)}
      </div>
      <div className='letter-buttons-wrapper'>
        {LETTERS.map(letter => (
          <LetterButton
            key={letter}
            letter={letter}
            wordContainsLetter={wordLetters.map(wordLetter => wordLetter.letter).includes(letter)}
            checkLetter={checkLetter} 
          />
        ))}
      </div>
    </section>
  )
}

function WordLetter({letter}){

  return (
    <span className='word-letter'>
      {letter.found ? letter.letter : ""}
    </span>
  )
}

function LetterButton({letter, wordContainsLetter, checkLetter}){

  const [isPressed, setIsPressed] = useState(false)

  const buttonClass = (
    !isPressed ?
      "unpressed-button" :
      wordContainsLetter ?
        "correct-button" :
        "incorrect-button"
    )

  function onLetterButtonClick(){

    checkLetter(letter)
    setIsPressed(true)
  }

  return (
    <button 
      onClick={isPressed ? undefined : onLetterButtonClick}
      className={`letter-button ${buttonClass}`}
    >
      {letter}
    </button>
  )
}
