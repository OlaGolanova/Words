import React, { useState,useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { WordsContext } from '../WordsContextProvider/WordsContextProvider';
import logo from '../../utils/logo1.png';
import Timer from '../Timer/Timer';
import './Header.scss';

  
export default  function Header(){
    const { words, setWords, flag, setFlag } = useContext(WordsContext);
    const location = useLocation();
    const isTrainingMode = location.pathname === '/Words/game';
    const [pressedCardBtn, setPressedCardBtn] = useState(isTrainingMode);
    const [pressedTableBtn, setPressedTableBtn] = useState(!isTrainingMode);
    const [value, setValue] = useState('');
  
   
    const handleChangeCardBtn = () => {
        if (!pressedCardBtn){
            setPressedCardBtn(!pressedCardBtn);
        };
        if(pressedTableBtn) {
            setPressedTableBtn(!pressedTableBtn);
        };
     
    };
    const handleChangeTableBtn = () => {
        if(!pressedTableBtn){
            setPressedTableBtn(!pressedTableBtn);
        };
        if(pressedCardBtn){
            setPressedCardBtn(!pressedCardBtn);
        }    
    };

    const handleChangeValue = (event) => {
        setValue(event.target.value);
        const newWords = words.filter(word => word.russian.toLowerCase().includes(event.target.value.toLowerCase()) 
        ||  word.english.toLowerCase().includes(event.target.value.toLowerCase()) );
        console.log(newWords);

        setWords(newWords);

        if(event.target.value === '') {
            setFlag(!flag);
        }
    };
    console.log( value.toLowerCase() );

    const search = (
        <>
            <div className = "search" >
                <FontAwesomeIcon icon={ faSearch } /> 
            </div>
            <input
                className = "searchPanel" 
                type="text"
                placeholder="Введите слово" 
                onChange = { handleChangeValue }
            />
        </>         
    );

    return (
        <div className="header_wrapper">
            <header>
                <div className = "header" >
                    <nav>
                        <li onClick = { handleChangeTableBtn }>
                            <Link
                                className = "link" to="/Words">Список слов</Link>
                        </li>
                        <li onClick = { handleChangeCardBtn }>
                            <Link
                                className = "link" to="/Words/game">Режим тренировки</Link>
                        </li>
                    </nav>
                    <CSSTransition
                        in={ pressedTableBtn }
                        timeout={300}
                        classNames="alert"
                        unmountOnExit>
                        <form action="" className="form">
                            { search }  
                        </form>
                    </CSSTransition>
                </div>
                <CSSTransition
                    in={ pressedCardBtn }
                    timeout={300}
                    classNames="alert"
                    unmountOnExit>
                    <div className = "timer">
                        <Timer />
                    </div>
                </CSSTransition> 
                <Link to="/Words">
                    <img 
                        src={logo} 
                        className = "logo" 
                        alt="logo"
                        onClick = { handleChangeTableBtn } />
                </Link>
            </header>
        </div>
        
    );
};

