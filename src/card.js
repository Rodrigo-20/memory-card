import React from 'react';

const CardCharacter = (props) => {
    const { image, alt, clickChar } = props;
    return (<div className='card' onClick={() => clickChar(alt)}>
        <img src={image} alt={alt} />
    </div>)
}

export default CardCharacter;
