import React, { useState } from 'react';

import styles from './CardItem.module.scss';

export default function CardItem(props){
    const {id, english = 'loading', transcription = 'ˈləʊdɪŋ', russian ='загрузка'} = props;

   
    const [ pressed, setPressed ] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    };

    const sideFront = (
        <button 
            className = { styles.button } 
            onClick={handleChange}> Проверить </button>  
    ); 
    const sideFlip = (
        <div 
            className = { styles.translate }
            onClick={handleChange}
        >{ russian }</div> 
    );


    return (
        <div className={styles.card} key = { id }>
            <div className = { styles.englishWord }>{ english }</div>
            <div className = { styles.transcription }>{ transcription }</div>
            <>{pressed ? sideFlip : sideFront}</>
         
        </div>
    );
};
  
