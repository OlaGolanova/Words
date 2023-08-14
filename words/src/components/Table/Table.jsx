import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';


import words from '../../utils/words.json'; 
import TableRow from '../TableRow/TableRow';
import InputChoice from '../InputChoice/InputChoice';
import './Table.scss';



export default function Table() {
    const [pressed, setPressed] = useState(false);
    const [editEnglish, setEditEnglish] = useState('');
    const [editTranscription, setEditTranscription] = useState('');
    const [editRussian, setEditRussian] = useState('');

    const [ inputEmptyEnglish, setInputEmptyEnglish ] = useState('');
    const [ inputEmptyTranscription, setInputEmptyTranscription ] = useState('');
    const [ inputEmptyRussian, setInputEmptyRussian ] = useState('');

    
    const [ isValidEnglish, setIsValidEnglish ] = useState(false);
    const [ isValidTranscription, setIsValidTranscription ] = useState(false);
    const [ isValidRussian, setIsValidRussian ] = useState(false);

    const [ disableBtn, setDisableBtn ] = useState(true);

    const [ classNameSaveBtn, setClassNameSaveBtn ] = useState('disable');

 
    const handleCancel = () => {
        setPressed(!pressed);
        setEditEnglish('');
        setEditTranscription('');
        setEditRussian('');
        setInputEmptyEnglish('');
        setInputEmptyTranscription('');
        setInputEmptyRussian('');
    };

    const handleChangeInputEnglish = (e) => {
        const englishRegex = /^[A-Za-z]+$/;
        setEditEnglish(e.target.value);
        setIsValidEnglish(englishRegex.test(e.target.value));

        if (englishRegex.test(e.target.value)) {
            setInputEmptyEnglish('');
            setClassNameSaveBtn((isValidEnglish && isValidTranscription && isValidRussian) ? '' : 'disable');
            setDisableBtn( (isValidEnglish && isValidTranscription && isValidRussian) ? false : true );
        
        } else{
            setClassNameSaveBtn ('disable');
            setInputEmptyEnglish('red-border');
            setClassNameSaveBtn('disable');
            setDisableBtn( true );
        };
    };

    const handleChangeInputTranscription = (e) => {
        const transcriptionRegex =  /^\[?[a-zA-Z-\d ]+\]?$/ ;
        setEditTranscription(e.target.value);
        setIsValidTranscription(transcriptionRegex.test(e.target.value));
 

        if (transcriptionRegex.test(e.target.value)) {
            setInputEmptyTranscription('');
            setClassNameSaveBtn((isValidEnglish && isValidTranscription && isValidRussian) ? '' : 'disable');
            setDisableBtn( (isValidEnglish && isValidTranscription && isValidRussian) ? false : true );
            
        }else{
            setClassNameSaveBtn ('disable');
            setInputEmptyTranscription('red-border');
            setDisableBtn(true);
        };
    };
    const handleChangeInputRussian = (e) => {
        const russianRegex = /^[а-яёА-ЯЁ]+$/;
        setEditRussian(e.target.value);
        setIsValidRussian(russianRegex.test(e.target.value));

        if (russianRegex.test(e.target.value)) {
            setInputEmptyRussian('');
            setClassNameSaveBtn((isValidEnglish && isValidTranscription && isValidRussian) ? '' : 'disable');
            setDisableBtn( (isValidEnglish && isValidTranscription && isValidRussian) ? false : true );

        }else{
            setClassNameSaveBtn ('disable');
            setInputEmptyRussian('red-border');
            setDisableBtn(true);
        };
    };

    const handleSave = () => {

        console.log(editEnglish);
        console.log( editTranscription);
        console.log(editRussian);
        setEditEnglish('');
        setEditTranscription('');
        setEditRussian('');
        setDisableBtn(true);
        setClassNameSaveBtn('disable');

    };

    const inputNewWord = (
        <tr className= "choiceTr" >
            <td></td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyEnglish }
                    value = { editEnglish }
                    onEdit = { handleChangeInputEnglish } />
            </td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyTranscription }
                    value = { editTranscription }
                    onEdit = { handleChangeInputTranscription }/>  
            </td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyRussian}
                    value = { editRussian }
                    onEdit = { handleChangeInputRussian }/> 
            </td>
            <td>
                <button 
                    className={`save ${classNameSaveBtn}`} 
                    disabled={disableBtn} 
                    onClick = { handleSave }>
                    <FontAwesomeIcon icon = { faCheck } />
                    Сохранить
                </button>
                <button 
                    className = "cancel"
                    onClick = {  handleCancel } >
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
  
