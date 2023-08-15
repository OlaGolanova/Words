import React, { useRef, useEffect } from 'react';

import './CardItem.scss';

export default function CardItem(props){
    const { id,
        color, 
        english, 
        transcription, 
        russian, 
        pressed, 
        setPressed,
        openCard,
        setOpenCard
    } = props;
 
        
    const ref = useRef();
    
    useEffect(() => {
        if(!pressed){
            ref.current.focus();
        }  
    }, [pressed]);


    
    const handleChange = () => {
        setPressed(!pressed);
        setOpenCard(openCard + 1);
    };

    const sideBtnFront = (
        <button 
            className = "button_check"
            ref={ref}  
            onClick = { handleChange }> Проверить </button> 
    ); 

    const sideBtnFlip = (
        <div 
            className = "translate" 
        >{ russian }</div> 
    );

    return (
        <div className = "card_item"   key = { id }>
            <div className = {`englishWord ${color}`}>{ english }</div>
            <div className = "transcription" >{ transcription }</div>
            <> { pressed ? sideBtnFlip : sideBtnFront } </>
        </div>
    );
};
  
CardItem.defaultProps = {
    english: 'loading', 
    russian: 'загрузка'
};