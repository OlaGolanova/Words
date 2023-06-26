import React, { useState } from 'react';

import './CardItem.scss';

export default function CardItem(props){
    const {id, color, english = 'loading', transcription = 'ˈləʊdɪŋ', russian ='загрузка'} = props;

   
    const [ pressed, setPressed ] = useState(false);

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
        <div className = "card"   key = { id }>
            <div className = {`englishWord ${color}`}  >{ english }</div>
            <div className = "transcription" >{ transcription }</div>
            <> { pressed ? sideBtnFlip : sideBtnFront } </>
        </div>
    );
};
  
