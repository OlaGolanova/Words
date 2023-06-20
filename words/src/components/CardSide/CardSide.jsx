import React, { useState } from 'react';

import styles from './CardSide.module.scss';

export default function CardSide(props){
    const {id, english, transcription, russian} = props;

    const [ pressed, setPressed ] = useState(false);
    const [ flipChange, setFlipChange ] = useState(false);

    const handleChange = () => {
        setPressed(!pressed);
    };
    const handleChangeFlip = () => {
        setFlipChange(!flipChange);
    };
    

    const sideFront = (
        <button 
            className = { styles.button } 
            onClick={handleChange}> Проверить </button>  
    );
      
    const sideFlip = (
        <div className = { styles.translate }>{ russian }</div> 
    );

    return (
        <div className={styles.card} onClick={handleChangeFlip}>
            <div className = { styles.englishWord }>{ english }</div>
            <div className = { styles.transcription }>{ transcription }</div>
            <>{pressed ? sideFlip : sideFront}
                {flipChange && sideFront}</>
        </div>
    );
};
  
