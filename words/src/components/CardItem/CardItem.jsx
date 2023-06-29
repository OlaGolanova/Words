import React from 'react';

import './CardItem.scss';

export default function CardItem(props){
    const {
        id, 
        color, 
        english, 
        transcription, 
        russian, 
        pressed, 
        setPressed 
    } = props;
   
    const handleChange = () => {
        setPressed(!pressed);
    };

    const sideBtnFront = (
        <button 
            className = "button_check"  
            onClick = { handleChange }> Проверить </button>  
    ); 

    const sideBtnFlip = (
        <div 
            className = "translate" 
            onClick = { handleChange }
        >{ russian }</div> 
    );

    return (
        <div className = "card_item"   key = { id }>
            <div className = {`englishWord ${color}`}  >{ english }</div>
            <div className = "transcription" >{ transcription }</div>
            <> { pressed ? sideBtnFlip : sideBtnFront } </>
        </div>
    );
};
  
CardItem.defaultProps = {
    english: 'loading', 
    transcription: 'ˈləʊdɪŋ', 
    russian: 'загрузка'
};