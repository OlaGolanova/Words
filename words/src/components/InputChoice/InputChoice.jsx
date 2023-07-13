import React from 'react';

import './InputChoice.scss';

export default function InputChoice(props) {

    const {value, onEdit} = props;

    return ( 
        <form action="">
            <input 
                className = "input" 
                type = "text"
                value = { value }
                onChange = { onEdit }
            />
        </form>
    );
};
  