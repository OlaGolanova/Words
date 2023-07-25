import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';


import words from '../../utils/words.json'; 
import TableRow from '../TableRow/TableRow';
import InputChoice from '../InputChoice/InputChoice';
import './Table.scss';



export default function Table() {

    const inputNewWord = (
        <tr className= "choiceTr" >
            <td></td>
            <td> 
                <InputChoice/>
            </td>
            <td> 
                <InputChoice/>  
            </td>
            <td> 
                <InputChoice/> 
            </td>
            <td>
                <button className= "save" >
                    <FontAwesomeIcon icon = { faCheck } />
                    Сохранить
                </button>
                <button 
                    className = "cancel" >
                    <FontAwesomeIcon icon = { faClose } />
                </button>
            </td>
        </tr>      
    );


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
                    <>
                        { inputNewWord } 
                    </>
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
  
