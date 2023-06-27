import React, { useState } from 'react';

import timer from '../../utils/timer.png';

import './Timer.scss';

export default function Timer(){

    const [ pressedStartTimer, setStartTimer ] = useState('timer_btn');
    const [ pressedEndTimer, setEndTimer ] = useState('timer_btn');
    const [ minutesOne, setMinutesOne ] = useState(0);
    const [ minutesTwo, setMinutesTwo ] = useState(0);
    const [ secondsOne, setSecondsOne ] = useState(0);
    const [ secondsTwo, setSecondsTwo ] = useState(0);
    const [ timerID, setTimerID ] = useState(false);

    let secondsNewOne = secondsOne;
    let secondsNewTwo = secondsTwo;
    let minutesNewOne = minutesOne;
    let minutesNewTwo = minutesTwo;
    const handleStart = () => {
        setStartTimer('timer_btn_active');
        setEndTimer('timer_btn');
        
        const timerID = setInterval(function(){   
            if (secondsNewOne === 5 && secondsNewTwo === 9 && minutesNewOne === 5 && minutesNewTwo === 9){
                clearInterval(timerID);
            }else if (secondsNewOne === 5 && secondsNewTwo === 9 && minutesNewTwo === 9 ){
                setSecondsOne(0);
                setSecondsTwo(0);
                secondsNewOne = 0;
                secondsNewTwo = 0;
                setMinutesTwo (0);
                minutesNewTwo = 0;
                setMinutesOne (0);
                minutesNewOne = minutesNewOne + 1;
            }else if (secondsNewOne === 5 && secondsNewTwo === 9){
                setSecondsOne(0);
                setSecondsTwo(0);
                secondsNewOne = 0;
                secondsNewTwo = 0;
                setMinutesTwo (minutesNewTwo + 1);
                minutesNewTwo = minutesNewTwo + 1;
            }else if (secondsNewTwo === 9){
                setSecondsTwo(0);
                setSecondsOne(secondsNewOne + 1);
                secondsNewOne = secondsNewOne + 1;
                secondsNewTwo = 0;
            }else if (secondsNewTwo < 9){
                setSecondsTwo(secondsNewTwo + 1);
                secondsNewTwo = (secondsNewTwo + 1);
            };
        }, 1000);
        setTimerID( timerID ); 
    };

    const handleEnd = () => {
        clearInterval(timerID);
        setTimerID( false );
        setStartTimer('timer_btn');
        setEndTimer('timer_btn_active');
    };
    
    return (
        <div className = "timer">
            <img src = { timer } className = "timer_img" alt="timer" />
            <div className = "timer_info">{ minutesOne }{ minutesTwo }:{ secondsOne }{ secondsTwo }</div>
            <div className = "btn_wrap">
                <button 
                    className = {pressedStartTimer}
                    onClick = { handleStart }>Старт</button>
                <button 
                    className = {pressedEndTimer}
                    onClick = { handleEnd }> Стоп</button>
            </div>
        </div>
    );
};
