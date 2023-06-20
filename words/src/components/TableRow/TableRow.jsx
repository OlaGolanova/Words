import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faClose } from '@fortawesome/free-solid-svg-icons';

import InputChoice from '../InputChoice/InputChoice';

import styles from './TableRow.module.scss';




export default function TableRow(props){
    const {id, index, english, transcription, russian} = props;
    let result = (
        <tr key = { id }>
            <td> { index+1 } </td>
            <td> { english } </td>
            <td> { transcription } </td>
            <td> { russian } </td>
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
            <tr className= { styles.choiceTr }  key = { id }>
                <td> { index+1 } </td>
                <td> 
                    <InputChoice
                        value = { english}
                    />
                </td>
                <td> 
                    <InputChoice
                        value = { transcription}
                    />  
                </td>
                <td> 
                    <InputChoice
                        value = { russian}
                    /> 
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
        result
    );
            
};

