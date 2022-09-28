import React, { useEffect, useState } from 'react';
import Added from '../added/Added';
import Cards from '../cards/Cards';
import './Main.css'

const Main = () => {
    const [cards, setCards]=useState([])
    console.log(cards)
    useEffect(()=>{
        fetch('Packs.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className='main-body'>
            <div>
                {
                    cards.map(card=> <Cards 
                        card={card}
                        key = {card.id}
                        ></Cards>)
                }
            </div>
            <div>
                <Added></Added>
            </div>
        </div>
    );
};

export default Main;