import React from 'react';

const Win = (props) => {
    let { youWin, playAgain } = props;
    return (
        youWin
            ? <div className='win-bg'>
                <div className='end'>


                    <h2>Mankind give a step towards defeating these demons</h2>
                    <div onClick={playAgain}>
                        <h2>Play again</h2>
                    </div>
                </div>
            </div>
            : null
    )
}
export default Win;