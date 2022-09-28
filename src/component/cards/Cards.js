import React from 'react';
import './Cards.css'

const Cards = ({card}) => {
    const {image, time, pakage}=card
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h3>{pakage}</h3>
            <h4>{time}</h4>
            <button>Add to List</button>
        </div>
    );
};

export default Cards;