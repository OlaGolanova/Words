import React from 'react';

import data from '../data.json'; 

import TableRow from '../TableRow/TableRow';

import styles from './Table.module.scss';



function Table() {

    return (
        <table>
            <tr>
                <th className={styles.number}></th>
                <th>Слово</th>
                <th>Транскрипция</th>
                <th>Перевод</th>
                <th></th>
            </tr>
          
            <tbody>
                {
                    data.map(function (item,index) {
                        return  <TableRow
                            choice = {item.choice}
                            key={ item.id }
                            index = {index}
                            english = { item.english }
                            transcription = { item.transcription }
                            russian = { item.russian }
                        />;
                    })
                }

            </tbody>
        </table>
    ); 
    
};
  
export default Table;
  

//Для списка слов