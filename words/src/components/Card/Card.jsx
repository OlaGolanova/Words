import React from 'react';

import data from '../../utils/data.json'; 

import CardSide from '../CardSide/CardSide';

import styles from './Card.module.scss';




export default function Card(){

    return (
        <>
            <CardSide
                english = { data[0].english }
                transcription = { data[0].transcription }
                russian = { data[0].russian }
            />
        </>
    );
};
  

  

//Для одной карточки со словом
