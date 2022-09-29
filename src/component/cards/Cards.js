import React from 'react';
import './Cards.css'

const Cards = ({card,addedlick}) => {
    const {image, time, pakage}=card;
    // console.log(addedlick)
    return (
        <div className='card'>
            <img src={image} alt="" />
            <h3>{pakage}</h3>
            <h4>Gym-Time: {time}s</h4>
            <button onClick={()=> addedlick(card)}>Add to List</button>
        </div>
    );
};

export default Cards;