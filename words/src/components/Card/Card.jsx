import React, { useState, forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import words from '../../utils/words.json'; 
import CardItem from '../CardItem/CardItem';


import './Card.scss';

const Card = forwardRef((props, ref) => {
    const { indexCard } = props;
    const arrColorWords = [ 'red', 'orange', 'yellow', 'green', 'blue', 'main', 'violet' ];
    const rand = Math.floor(Math.random()*arrColorWords.length);
    const randomColor = arrColorWords[rand];
    const [index, setIndex] = useState(indexCard ? indexCard : 0);
    const [pressed, setPressed] = useState(true);
    const [colorWord, setColorWord] = useState('main');
    const [innerPressed, setInnerPressed] = useState(false);
    const [openCard, setOpenCard] = useState(0);
    const [cardItemRef, setCardItemRef] = useState(null);

    const handleChangePrevCard = () => {
        if (innerPressed) {
            setInnerPressed(!innerPressed);
        }
        if (index > 0) {
            setIndex(index - 1);

        } else if (index === 0) {
            setIndex(words.length - 1);

        };
        addAnimationCard();

    };

    const handleChangeNextCard = () => {
        if (innerPressed) {
            setInnerPressed(!innerPressed);
        }

        if (index < words.length - 1) {
            setIndex(index + 1);
          
        } else if (index === (words.length - 1)){
            setIndex(0);
          
        };
        addAnimationCard();

    };

    function deleteAnimation(){
        setPressed(pressed);
    };

    function addAnimationCard(){
        setColorWord(randomColor);
        setPressed(!pressed);
        setTimeout(deleteAnimation, 1);
    }


    return (
    
        <div className="card"> 
            <button 
                className = "button"
                onClick = { handleChangePrevCard }>
                <FontAwesomeIcon
                    className = "fa-2x"
                    icon = { faChevronLeft }/>
            </button>

            <div className = "wrapper">
                <div className= "openCard">Проверено слов: {openCard}</div>
                <div className = { pressed ? 'cardItem' : 'animation' }>
                    <CardItem
                        color = { colorWord }
                        english = { words[index].english }
                        transcription = { words[index].transcription }
                        russian = { words[index].russian }
                        pressed = { innerPressed }
                        setPressed = { setInnerPressed }
                        openCard = { openCard }
                        setOpenCard = { setOpenCard }
                        ref = {(element) => setCardItemRef(element)}
                        cardItemRef = { cardItemRef }
                    /> 
                </div>
                <div className = "counter" > { index + 1 } / { words.length }</div>
            </div>

            <button 
                className = "button"
                onClick = { handleChangeNextCard } >
                <FontAwesomeIcon
                    className = "fa-2x"
                    icon = { faChevronRight }/>
            </button>
        </div>
       
           
    );
} 
);

Card.displayName = 'Card';

export default Card;
  


