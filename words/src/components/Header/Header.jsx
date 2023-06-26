import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../../utils/logo1.png';

import Timer from '../Timer/Timer';

import './Header.scss';

  
export default  function Header(){
    const [ pressed, setPressed ] = useState(true);

    const handleChangeBtn = () => {
        setPressed(!pressed);
    };
    
    const search = (
        <>
            <div className = "search" >
                <FontAwesomeIcon icon={faSearch} /> 
            </div>

            <input
                className = "searchPanel" 
                type="text"
                placeholder="Введите слово" 
                onChange = { (event) => console.log(event.target.value) }
            />
        
        </>
                
    );

    return (
        <header>
            <div className = "header" >
                <form action="" className="form">
                    { pressed && search}  
                </form>
                <button 
                    className = "header_btn"
                    onClick = { handleChangeBtn}>
                    { pressed ? 'Режим Тренировки' : 'Список слов'}  
                </button>
            </div>
            { !pressed &&  <Timer />}  
            <img src={logo} className = "logo" alt="logo" />
        </header>
    );
};

