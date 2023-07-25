import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../../utils/logo1.png';
import Timer from '../Timer/Timer';
import './Header.scss';

  
export default  function Header(){
    const [pressedCardBtn, setPressedCardBtn] = useState(false);
    const [pressedTableBtn, setPressedTableBtn] = useState(true);
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
                                className = "link"
                                to="/Words">Список слов</Link>
                        </li>
                        <li onClick = { handleChangeCardBtn }>
                            <Link
                                className = "link" 
                                to="/Words/training">Режим тренировки</Link>
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

