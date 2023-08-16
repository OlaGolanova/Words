import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import InputChoice from '../InputChoice/InputChoice';
import './TableRow.scss';




export default function TableRow(props){
    const {id, index, english, transcription, russian, onDelete } = props;

    const [pressed, setPressed] = useState(false);
    const [editEnglish, setEditEnglish] = useState(english);
    const [editTranscription, setEditTranscription] = useState(transcription);
    const [editRussian, setEditRussian] = useState(russian);

    const [ inputEmptyEnglish, setInputEmptyEnglish ] = useState('');
    const [ inputEmptyTranscription, setInputEmptyTranscription ] = useState('');
    const [ inputEmptyRussian, setInputEmptyRussian ] = useState('');

    const [ disableBtn, setDisableBtn ] = useState(false);
    const [ classNameSaveBtn, setClassNameSaveBtn ] = useState('');


    const wordCancel = () => {
        setPressed(!pressed);
        setEditEnglish(english);
        setEditTranscription(transcription);
        setEditRussian(russian);
    };

    const handleChangeInputEnglish = (e) => {
        const englishRegex = /^[A-Za-z]+$/;
        setEditEnglish(e.target.value);

        if (englishRegex.test(e.target.value)) {
            setInputEmptyEnglish('');
            setClassNameSaveBtn('');

            setDisableBtn(false);
        } else{
            setClassNameSaveBtn ('disable');
            setInputEmptyEnglish('red-border');

            setDisableBtn(true);
        };
    };

    const handleChangeInputTranscription = (e) => {
        const transcriptionRegex =  /^\[?[a-zA-Z-\d ]+\]?$/ ;
        setEditTranscription(e.target.value);

        if (transcriptionRegex.test(e.target.value)) {
            setClassNameSaveBtn('');
            setInputEmptyTranscription('');

            setDisableBtn(false);
       
        }else{
            setClassNameSaveBtn ('disable');
            setInputEmptyTranscription('red-border');

            setDisableBtn(true);
        };
    };
    const handleChangeInputRussian = (e) => {
        const russianRegex = /^[а-яёА-ЯЁ]+$/;
        setEditRussian(e.target.value);
    
        if (russianRegex.test(e.target.value)) {
            setClassNameSaveBtn('');
            setInputEmptyRussian('');

            setDisableBtn(false);
       
        }else{
            setClassNameSaveBtn ('disable');
            setInputEmptyRussian('red-border');

            setDisableBtn(true);
        };
        
    };

    const wordSave = (id) => {
        setPressed(!pressed);

        const elem = id;
        const element = {
            english: editEnglish,
            transcription: editTranscription,
            russian: editRussian
        };
        console.log(element)

        fetch(`/api/words/${elem}/update`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(element)
            })
            .then(response => response.json())
            .then(element => {
                console.log(element);
            })

            .catch(error => console.log(error));


        // console.log(editEnglish);
        // console.log( editTranscription);
        // console.log(editRussian);
        // console.log(element);

    };

    const row = (
        <tr key = { id }>
            <td> { index + 1 } </td>
            <td> { english } </td>
            <td> { transcription } </td>
            <td> { russian } </td>
            <td>
                <button
                    className = "pen" 
                    onClick = { wordCancel }>
                    <FontAwesomeIcon icon = { faPen } />
                </button>
                <button 
                    className = "trash"
                    onClick = { onDelete }>
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
                    type="text"
                    className = { inputEmptyEnglish }
                    value = { editEnglish }
                    onEdit = { handleChangeInputEnglish }
                />
            </td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyTranscription }
                    value = { editTranscription }
                    onEdit = { handleChangeInputTranscription }
                />  
            </td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyRussian}
                    value = { editRussian }
                    onEdit = { handleChangeInputRussian }
                /> 
            </td>
            <td>
                <button 
                    className = {`save ${classNameSaveBtn}`} 
                    disabled = {disableBtn}
                    onClick = { (id) => wordSave(id) }
                >
                    <FontAwesomeIcon icon = { faCheck } />
                    Сохранить
                </button>
                <button 
                    className = "cancel" 
                    onClick = { wordCancel }>
                    <FontAwesomeIcon icon = { faClose } />
                </button>
            </td>
        </tr>      
    );

    return(
     
        pressed ? rowChoice : row
    );
            
};

TableRow.defaultProps = {
    english: 'loading', 
    transcription: 'ˈləʊdɪŋ', 
    russian: 'загрузка'
};