import React from 'react';

import styles from './InputChoice.module.scss';

function InputChoice(props) {
    return ( 
        <form action="" className={ styles.form }>
            <input 
                className = { styles.input }
                type = "text"
                value = { props.english }
            />
        </form>
    );
};
  
export default InputChoice;