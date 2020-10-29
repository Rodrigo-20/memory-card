import React, { useEffect, useState } from 'react';
import Header from './header.js';
import './App.scss';
import characters from './images.js';

const CardCharacter = (props) => {
  const { image, alt, clickChar } = props;
  return (<div className='card' onClick={() => clickChar(alt)}>
    <img src={image} alt={alt} />
  </div>)
}

const Lose = (props) => {
  let { youLose, playAgain } = props;

  return (
    youLose ?
      <div id="lose-bg">
        <h2>You were eating by the titans</h2>
        <div onClick={playAgain}>
          <h2>Play again</h2>
        </div>
      </div> : null
  )
}

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
