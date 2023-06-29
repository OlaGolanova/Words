import React, { useState } from 'react';

import words from '../../utils/words.json'; 
import TableRow from '../TableRow/TableRow';
import './Table.scss';



export default function Table() {


    return (
        <div className="table">
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
                        words.map(function (word,index) {
                            return  <TableRow
                                choice = { word.choice }
                                key={ word.id }
                                index = { index }
                                english = { word.english }
                                transcription = { word.transcription }
                                russian = { word.russian }
                                onDelete = { id => console.log( word.id) }
                            />;
                        })
                    }
                </tbody>
            </table>
        </div>
    
    );  
}
  
