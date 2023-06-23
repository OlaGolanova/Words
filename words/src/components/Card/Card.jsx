import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import data from '../../utils/data.json'; 

import CardItem from '../CardItem/CardItem';

import styles from './Card.module.scss';



export default function Card(props){
    const {indexCard} = props;
  
    const [index, setIndex] = useState(indexCard ? indexCard : 0);

    const handleChangePrevCard = () => {
        if (index > 0) {
            setIndex(index - 1);
        };
    };

    const handleChangeNextCard = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        };
    };

    return (
        <> 
        
            <button 
                className = {styles.button}
                onClick = { handleChangePrevCard } >
                <FontAwesomeIcon
                    className = "fa-2x"
                    icon = { faChevronLeft }/>
            </button>


            <CardItem
                english = { data[index].english }
                transcription = { data[index].transcription }
                russian = { data[index].russian }
                
            />


            <button 
                className = {styles.button}
                onClick = { handleChangeNextCard } >
                <FontAwesomeIcon
                    className = "fa-2x"
                    icon = { faChevronRight }/>
            </button>

      
        </>
    );
};
  

  

//Для одной карточки со словом
