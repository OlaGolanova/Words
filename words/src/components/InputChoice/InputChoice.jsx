import React from 'react';

import './InputChoice.scss';

export default function InputChoice(props) {

    const {value, onEdit, className} = props;

    return ( 
        <form action="">
            <input 
                className={`input ${className}`} 
                type = "text"
                value = { value }
                onChange = { onEdit }
            />
        </form>
    );
};
  