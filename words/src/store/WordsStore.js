import {useState, useEffect} from 'react';

import { observable, action } from 'mobx';



export default function  WordsStore () {
    const [words, setWords] = useState([]);
    const wordsStore = observable({ words })


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [flag, setFlag] = useState();


    useEffect(() => {
        setIsLoading(true);

        fetch('/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Что-то пошло не так...Ошибка ${response.status}`);
    
                }
            })
            .then((response) => {
                setWords(response);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, [] );

    const addWord = action((word) => {
        words.push(word);
    });

    const removeWord = action((index) => {
        words.splice(index, 1);
    });

    return {
        wordsStore,
        addWord,
        removeWord,
    };
};