import React from 'react';
import './ErrorMessage.scss';

export default  function Loader({onClick, error}){

    return(
        <div className = "error">
            <div className = "error_wrap">
                <p className = "error_title">{error}</p>  
                <button 
                    className = "error_btn"
                    onClick = { onClick }>
                        Попробовать еще раз
                </button>
            </div>
          
        </div>
    );
}