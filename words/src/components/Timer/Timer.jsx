import React, { useState } from 'react';

import timer from '../../utils/timer2.png';

import './Timer.scss';

export default function Timer(){
    
    const [ minutes, setMinutes ] = useState(0);
    const [ seconds, setSeconds ] = useState(0);

    let timerID;
    let secondsNew = seconds;
    let minutesNew = minutes;
    const handleStart = () => {
        timerID = setInterval(function(){
            if (secondsNew < 59){
                setSeconds(secondsNew + 1);
                secondsNew = (secondsNew + 1);
            }else if (secondsNew === 59) {
                setSeconds(0);
                setMinutes (minutesNew + 1);
                minutesNew = minutesNew + 1;
                secondsNew = 0;
            }else if (secondsNew === 59 && minutesNew === 59){
                clearInterval(timerID);
            };
     
        
        }, 1000);
        console.log(timerID);
    };

    const handleEnd = () => {
        clearInterval(timerID);
        console.log(timerID);
    };
    
    return (
        <div className="timer">
            <div className="timer_wrapper">
                <img src = { timer } className = "timer_img" alt="timer" />
                <div className = "timer_info">{ minutes }:{ seconds}</div>
                <div>
                    <button 
                        className = "timer_start timer_btn"
                        onClick = { handleStart }>Старт</button>
                    <button 
                        className = "timer_end timer_btn"
                        onClick = { handleEnd }> Стоп</button>
                </div>
            </div>
        </div>
    );
};
