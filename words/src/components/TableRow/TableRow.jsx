import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faClose } from '@fortawesome/free-solid-svg-icons';


import styles from './TableRow.module.scss';



function TableRow(props){

    let result = (
        <tr key = { props.id }>
            <td> { props.index+1 } </td>
            <td> { props.english } </td>
            <td> { props.transcription } </td>
            <td> { props.russian } </td>
            <td>
                <button className = { styles.pen }>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className = { styles.trash }>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    );
      
    if(props.choice){
        result = (
            <tr key = { props.id }>
                <td> { props.index+1 } </td>
                <td> 
                    <form action="" className={ styles.form }>
                        <input 
                            className = { styles.input }
                            type = "text"
                            value = { props.english }
                        />
                    </form>
                </td>
                <td> 
                    <form action="" className={ styles.form }>
                        <input 
                            className = { styles.input }
                            type = "text"
                            value = { props.transcription }
                        />
                    </form>
                </td>
                <td> 
                    <form action="" className={ styles.form }>
                        <input 
                            className = { styles.input }
                            type = "text"
                            value = { props.russian }
                        />
                    </form>
                </td>
                <td>
                    <button className={styles.save}>
                        <FontAwesomeIcon icon={faCheck} />
                        Сохранить
                    </button>
                    <button className={styles.cancel}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </td>
            </tr> 
        );     
    }

    return (
        {result}
    );
            
}

export default TableRow;


