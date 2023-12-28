import React, { useState,  useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClose } from '@fortawesome/free-solid-svg-icons';


// import words from '../../utils/words.json'; 
import TableRow from '../TableRow/TableRow';
import InputChoice from '../InputChoice/InputChoice';
import { WordsContext } from '../WordsContextProvider/WordsContextProvider';
import './Table.scss';




export default function Table() {
    const { words, flag, setFlag } = useContext(WordsContext);
    const [pressed, setPressed] = useState(false);
    const [editNewEnglish, setEditNewEnglish] = useState('');
    const [editNewTranscription, setEditNewTranscription] = useState('');
    const [editNewRussian, setEditNewRussian] = useState('');

    const [ inputEmptyEnglish, setInputEmptyEnglish ] = useState('');
    const [ inputEmptyTranscription, setInputEmptyTranscription ] = useState('');
    const [ inputEmptyRussian, setInputEmptyRussian ] = useState('');

    
    const [ isValidEnglish, setIsValidEnglish ] = useState(false);
    const [ isValidTranscription, setIsValidTranscription ] = useState(false);
    const [ isValidRussian, setIsValidRussian ] = useState(false);

    const [ disableBtn, setDisableBtn ] = useState(true);

    const [ classNameSaveBtn, setClassNameSaveBtn ] = useState('disable');

 
    const wordCancelNew = () => {
        setPressed(!pressed);
        setEditNewEnglish('');
        setEditNewTranscription('');
        setEditNewRussian('');
        setInputEmptyEnglish('');
        setInputEmptyTranscription('');
        setInputEmptyRussian('');
    };

    const handleChangeInputEnglish = (e) => {
        const englishRegex = /^[A-Za-z]+$/;
        setEditNewEnglish(e.target.value);
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
        setEditNewTranscription(e.target.value);
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
        setEditNewRussian(e.target.value);
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

    const wordSaveNew = () => {

<<<<<<< HEAD
        setEditNewEnglish('');
        setEditNewTranscription('');
        setEditNewRussian('');
=======
        console.log(editEnglish);
        console.log( editTranscription);
        console.log(editRussian);
        setEditEnglish('');
        setEditTranscription('');
        setEditRussian('');
>>>>>>> 78ec08bcabfebb9910d06fd7e4a4582d20148fd9
        setIsValidEnglish(false);
        setIsValidTranscription(false);
        setIsValidRussian(false);
        setDisableBtn(true);
        setClassNameSaveBtn('disable');

        const element = {
            english: editNewEnglish,
            transcription: editNewTranscription,
            russian: editNewRussian
        };

        fetch('/api/words/add',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(element)
            })
            .then(response => response.json())
            .then(element => {
                console.log(element);
                setFlag(!flag);
            })

            .catch(error => console.log(error));
    };

    const wordDelete = (id) => {

        const element = id;

        fetch(`/api/words/ ${element} /delete`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(element)
            })
            .then(response => response.json())
            .then(elem => {
                console.log(elem);
                setFlag(!flag);
            })

            .catch(error => console.log(error));
        
    };

    const wordEdit = (id,editEnglish,editTranscription,editRussian) => {

        const el = id;
        const element = {
            id: id,
            english: editEnglish,
            transcription: editTranscription,
            russian: editRussian,
            tags: '',
            tags_json: '[]'
        }; 

        fetch(`/api/words/ ${el} /update`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(element)
            })
            .then(response => response.json())
            .then(elem => {
                console.log(elem);
                setFlag(!flag);
            })

            .catch(error => console.log(error));

    };


    const inputNewWord = (
        <tr className= "choiceTr" >
            <td></td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyEnglish }
                    value = { editNewEnglish }
                    onEdit = { handleChangeInputEnglish } />
            </td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyTranscription }
                    value = { editNewTranscription }
                    onEdit = { handleChangeInputTranscription }/>  
            </td>
            <td> 
                <InputChoice
                    type="text"
                    className = { inputEmptyRussian}
                    value = { editNewRussian }
                    onEdit = { handleChangeInputRussian }/> 
            </td>
            <td>
                <button 
                    className={`save ${classNameSaveBtn}`} 
                    disabled={disableBtn} 
                    onClick = { wordSaveNew }>
                    <FontAwesomeIcon icon = { faCheck } />
                    Сохранить
                </button>
                <button 
                    className = "cancel"
                    onClick = {  wordCancelNew } >
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
                                onDelete = { (id) => wordDelete (word.id) }
                                onEdit = { (id,editEnglish,editTranscription,editRussian) => 
                                    wordEdit(word.id, editEnglish,editTranscription,editRussian) }
                            />;
                        })
                    }
                </tbody>
            </table>
        </div>
  
    );  
}
  
