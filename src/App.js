import React, { useEffect, useState } from 'react';
import Header from './header.js';
import './App.scss';
import Lose from './lose.js'
import characters from './images.js';
import CardCharacter from './card.js'



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
  const [charac, setCharac] = useState(characters);
  const [lose, setLose] = useState(false);
  const [amountOfChar, setAmountOfChar] = useState(characters.length);

  useEffect(() => {
    setScore(charClicked.length);
    setCharac(sortCharacters(charac));
  }, [charClicked, lose, amountOfChar]);



  const getName = (name) => {
    return name.split('/')[3].split('.')[0];
  }

  const onClickChar = (name) => {
    charClicked.includes(name)
      ? setLose(true)
      : setCharClicked([...charClicked, name])
  }

  const playAgain = () => {
    setCharClicked([]);
    setLose(false);

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
      <Header score={score} handleChange={handleChange} amount={amountOfChar} />
      <div className='cards-container'>
        {Cards}
      </div>
      <Lose youLose={lose} playAgain={playAgain} />
    </div>
  )
}

export default App;
