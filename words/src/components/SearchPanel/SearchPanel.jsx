import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import styles from './SearchPanel.module.scss';


export default function SearchPanel() {


    return (
        <form action="" className = { styles.form }> 
            <div className = { styles.search }>
                <FontAwesomeIcon icon={faSearch} /> 
            </div>
            
            <input
                className = { styles.searchPanel }
                type="text"
                placeholder="Введите слово" 
                onChange = { (event) => console.log(event.target.value) }
            />
        </form>
    );
};

