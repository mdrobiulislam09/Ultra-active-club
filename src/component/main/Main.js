import React, { useEffect, useState } from 'react';
import Added from '../added/Added';
import Cards from '../cards/Cards';
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel } from '@fortawesome/free-solid-svg-icons'

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
                    <div className='icon'>
                        <h2><FontAwesomeIcon icon={faGavel}></FontAwesomeIcon></h2>
                        <h1>Power Zone</h1>
                    </div>
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
            <div className='list-data'>
                <Added times={time}></Added>
            </div>
        </div>
    );
};

export default Main;