import React from 'react';
import logo from './images/winds.jpeg';

const Header = (props) => {
    let { score, amount, handleChange, maxScore, remaining } = props
    return (
        <div className='header'>
            <div className='tittle'>
                <h1>Attack on Cards</h1>
            </div>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className="game-info">
                <h2>Score: {score}</h2>
                <h2>Max Score: {maxScore} </h2>
                <h2>Remaining: {remaining} </h2>
                <h2>Amount: {amount}</h2>
                <div className="slidecontainer">
                    <input type="range" min="5" max="19" step="1" value={amount} class="slider" id="myRange" onChange={handleChange} />
                </div>
            </div>

        </div>
    )
}

export default Header; 