import React from 'react';

const Cards = ({card}) => {
    const {id}=card
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Cards;