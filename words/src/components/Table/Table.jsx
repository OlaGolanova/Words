import React from 'react';

import data from '../../utils/data.json'; 

import TableRow from '../TableRow/TableRow';

import './Table.scss';



export default function Table() {

    return (
        <table>
            <thead>
                <tr className = "tablehead">
                    <th className= "number"></th>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th></th>
                </tr>
            </thead>
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
  

  

//Для списка слов