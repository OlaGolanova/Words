import React, { useState } from 'react';

import styles from './ButtonTraining.module.scss';

export default function ButtonTraining(){
    
    const [ pressed, setPressed ] = useState(false);

    const handleChangeBtn = () => {
        setPressed(!pressed);
    };

    return ( 
        <div className={ styles.button }>
            <button 
                onClick = { handleChangeBtn}>
                { pressed ? 'Режим Тренировки' : 'Список слов'}  
            </button>
        </div>
     
    );
};
  

  