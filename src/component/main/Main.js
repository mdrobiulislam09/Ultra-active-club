import React, { useEffect, useState } from 'react';
import Added from '../added/Added';
import Cards from '../cards/Cards';
import './Main.css'

const Main = () => {
    const [cards, setCards]=useState([])
    const [time, settime]=useState([])

    // console.log(cards)
    useEffect(()=>{
        fetch('Packs.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    const addedlick = (cardds) => {
        const newData = [...time,cardds];
        settime(newData)
    }
    
    return (
        <div className='main-body'>
            <div className='card-body'>
                <div>
                    <h1>UtRA-Active-club</h1>
                    <h3>Select today,s exercise</h3>
                </div>
                <div className='cards'>
                    {
                        cards.map(card=> <Cards 
                            card={card}
                            key = {card.id}
                            addedlick={addedlick}
                            ></Cards>)
                    }
                </div>
            </div>
            <div>
                <Added times={time}></Added>
            </div>
        </div>
    );
};

export default Main;