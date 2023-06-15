import React from 'react';

import styles from './InputChoice.module.scss';

const InputChoice = () => {
    return ( 
        <form action="" className={styles.form}>
            <input 
                className={styles.input}
                type="text"
            />
        </form>
    );
};
  
export default InputChoice;