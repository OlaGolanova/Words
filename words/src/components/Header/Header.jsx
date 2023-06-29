import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../../utils/logo1.png';
import Timer from '../Timer/Timer';
import './Header.scss';

  
export default  function Header(){
    const [ pressed, setPressed ] = useState(true);
    const [ value, setValue ] = useState('');
   
    const handleChangeBtn = () => {
        setPressed(!pressed);
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
        <header>
            <div className = "header" >
                <CSSTransition
                    in={ pressed }
                    timeout={300}
                    classNames="alert"
                    unmountOnExit>
                    <form action="" className="form">
                        { search }  
                    </form>
                </CSSTransition>
                <button 
                    className = "header_btn"
                    onClick = { handleChangeBtn}>
                    { pressed ? 'Режим Тренировки' : 'Список слов'}  
                </button>
            </div>
            <CSSTransition
                in={ !pressed }
                timeout={300}
                classNames="alert"
                unmountOnExit>
                <div className = "timer">
                    <Timer />
                </div>
            </CSSTransition> 
            <img src={logo} className = "logo" alt="logo" />
        </header>
    );
};

