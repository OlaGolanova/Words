import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import InputChoice from '../InputChoice/InputChoice';

import './TableRow.scss';




export default function TableRow(props){
    const {id, index, english, transcription, russian} = props;

    const [ pressed, setPressed ] = useState(false);
    const [editEnglish, setEnglish] = useState(english);
    const [editTranscription, setTranscription] = useState(transcription);
    const [editRussian, setRussian] = useState(russian);

    const handleChangeRow = () => {
        setPressed(!pressed);
    };

    
    const row = (
        <tr key = { id }>
            <td> { index+1 } </td>
            <td> { english } </td>
            <td> { transcription } </td>
            <td> { russian } </td>
            <td>
                <button 
                    className = "pen" 
                    onClick = { handleChangeRow }>
                    <FontAwesomeIcon icon = { faPen } />
                </button>
                <button className = "trash" >
                    <FontAwesomeIcon icon = { faTrash } />
                </button>
            </td>
        </tr>
    );
      
    
    const rowChoice = (
        <tr className= "choiceTr"   key = { id }>
            <td> { index+1 } </td>
            <td> 
                <InputChoice
                    value = { editEnglish }
                    onEdit = { e => setEnglish(e.target.value) }
                />
            </td>
            <td> 
                <InputChoice
                    value = { editTranscription }
                    onEdit = { e => setTranscription(e.target.value) }
                />  
            </td>
            <td> 
                <InputChoice
                    value = { editRussian }
                    onEdit = { e => setRussian(e.target.value) }
                /> 
            </td>
            <td>
                <button className= "save" >
                    <FontAwesomeIcon icon = { faCheck } />
                    Сохранить
                </button>
                <button 
                    className = "cancel" 
                    onClick = { handleChangeRow }>
                    <FontAwesomeIcon icon = { faClose } />
                </button>
            </td>
        </tr>      
    );

    return (
        pressed ? rowChoice : row
    );
            
};

