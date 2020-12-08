import React from 'react';

const Lose = (props) => {
    let { youLose, playAgain } = props;


    return (
        youLose ?
            <div id="lose-bg">
                <h2>You were eaten by the titans</h2>
                <div onClick={playAgain}>
                    <h2>Play again</h2>
                </div>

            </div>
            : null
    )
}

export default Lose;