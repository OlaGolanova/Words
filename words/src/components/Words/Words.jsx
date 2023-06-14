import React from 'react';

import data from '../data.json'; 

import styles from './Words.module.scss';

const Words = () => {

    const res = data.map(function(item, index) {
        return <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.english}</td>
            <td>{item.transcription}</td>
            <td>{item.russian}</td>
            <td></td>
        </tr>;
    });
    return (
        <table>
            <tr>
                <th className={styles.number}></th>
                <th>Слово</th>
                <th>Транскрипция</th>
                <th>Перевод</th>
                <th>Условный рендеринг</th>
            </tr>
            <tbody>
                {res}
            </tbody>
        </table>
    ); 
    
};
  
export default Words;
  

//Для списка слов