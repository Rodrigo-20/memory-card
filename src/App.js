import React, { useEffect, useState } from 'react';
import { useAudio } from './useAudio.js'
import Header from './header.js';
import './App.scss';
import Lose from './lose.js';
import Win from './win.js'
import characters from './images.js';
import CardCharacter from './card.js';
import loseSound from './audios/eren-eaten.mp3';
import playSound from './audios/play.mp3';
import winSound from './audios/win.mp3';

const sortCharacters = (arr) => {
  return arr.sort(() => {
    return (Math.random() * -1 + 0.5)
  })
}

const selectRandomValues = (arr, val) => {
  return sortCharacters(arr).slice(0, val);
}

const App = () => {
  const [charClicked, setCharClicked] = useState([]);
  const [score, setScore] = useState(charClicked.length);
  const [maxScore, setMaxScore] = useState(localStorage.getItem('maxScore') || 0);
  const [charac, setCharac] = useState(characters);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const [amountOfChar, setAmountOfChar] = useState(characters.length);
  const loseAudio = useAudio(loseSound);
  const playAudio = useAudio(playSound);
  const winAudio = useAudio(winSound);
  //const audio = new Audio(sound);
  const youWin = () => {
    setWin(true);
    winAudio();
    playAudio();
  }

  useEffect(() => {

    let currentScore = charClicked.length
    if (currentScore - amountOfChar == 0) {
      youWin();
    }
    if (maxScore < currentScore) {
      localStorage.setItem('maxScore', currentScore);
      setMaxScore(localStorage.getItem('maxScore'));
    }
    setScore(currentScore);
    setCharac(sortCharacters(charac));
  }, [charClicked, lose, amountOfChar]);

  useEffect(() => {
    playAudio();
  }, [])

  const getName = (name) => {
    return name.split('/')[3].split('.')[0];
  }

  const youLose = () => {
    //audio.play();
    playAudio();
    loseAudio();
    setLose(true);

  }



  const onClickChar = (name) => {
    charClicked.includes(name)
      ? youLose()
      : setCharClicked([...charClicked, name])
  }

  const playAgain = () => {
    if (lose) { loseAudio() };
    if (win) { winAudio() }
    playAudio();
    setCharClicked([]);
    setLose(false);
    setWin(false);

  }

  const handleChange = (e) => {
    setAmountOfChar(e.target.value);
    setCharac(selectRandomValues(characters, e.target.value));
    setCharClicked([]);

  }

  const Cards =
    charac.map(person =>
      <CardCharacter
        image={person}
        alt={`${getName(person)}`}
        clickChar={onClickChar}
      />
    );


  return (
    <div className='memory-app'>
      <Header score={score} handleChange={handleChange} amount={amountOfChar} maxScore={maxScore} remaining={amountOfChar - score} />
      <div className='cards-container'>
        {Cards}
      </div>
      <Lose youLose={lose} playAgain={playAgain} />
      <Win youWin={win} playAgain={playAgain} />
      <audio source="./audios/eren-eaten.mp3"> </audio>
    </div>
  )
}

export default App;
