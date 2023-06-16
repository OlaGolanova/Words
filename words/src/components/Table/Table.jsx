import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


import data from '../data.json'; 
import InputChoice from '../InputChoice/InputChoice';

import styles from './Table.module.scss';



function Table() {

    const result = data.map(function(item, index) {
        return <tr key = { item.id }>
            <td> { index+1 } </td>
            <td> { item.english } </td>
            <td> { item.transcription } </td>
            <td> { item.russian } </td>
            <td>
                <button className = { styles.pen }>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className = { styles.trash }>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>;
    });
    return (
        <table>
            <tr>
                <th className={styles.number}></th>
                <th>Слово</th>
                <th>Транскрипция</th>
                <th>Перевод</th>
                <th></th>
            </tr>
            <tr className={styles.choice}>
                <td></td>
                <td><InputChoice/></td>
                <td><InputChoice/></td>
                <td><InputChoice/></td>
                <td>
                    <button className={styles.save}>
                        <FontAwesomeIcon icon={faCheck} />
                         Сохранить
                    </button>
                    <button className={styles.cancel}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </td>
            </tr>
            <tbody>
                {result}
            </tbody>
        </table>
    ); 
    
};
  
export default Table;
  

//Для списка слов