import React from 'react';

const Lose = (props) => {
    let { youLose, playAgain } = props;


    return (
        youLose ?
            <div className='lose-bg'>

                <div className="end">


                    <h2>You were eaten by the titans</h2>
                    <div onClick={playAgain}>
                        <h2>Play again</h2>
                    </div>

                </div>

            </div>
            : null
    )
}

export default Lose;