import React from 'react';

import styles from './InputChoice.module.scss';

function InputChoice(props) {

    const { value } = props;

    return ( 
        <form action="">
            <input 
                className = { styles.input }
                type = "text"
                value = { value }
            />
        </form>
    );
};
  
export default InputChoice;