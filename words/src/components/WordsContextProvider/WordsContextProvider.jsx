import React, { useState, useEffect } from 'react';

const WordsContext = React.createContext(null);



function WordsContextProvider(props) {

    const [words, setWords] = useState([]);

    useEffect(() =>{                     
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => setWords(words = response));
    }, []); 

    return (
        <WordsContext.Provider value={ {words} }>
            {props.children}
        </WordsContext.Provider>

    );
}

export { WordsContextProvider, WordsContext };

