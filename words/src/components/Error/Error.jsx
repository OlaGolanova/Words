import React from 'react';
import './Error.scss';

export default  function Loader(onClick, error){



    return(
        <div className = "error">
            <div className = "error_wrap">
                <p className = "error_title">{error}</p>  
                <button 
                    className = "error_btn">Попробовать еще раз
                    onClick = { onClick }
                </button>
            </div>
          
        </div>
    );
}