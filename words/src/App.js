import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';
import Card from './components/Card/Card';
import NotFound from './components/NotFound/NotFound';

import { WordsContext }   from './components/WordsContextProvider/WordsContextProvider';





export default function App() {

    // const [words, setWords] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [isErr, setIsErr] = useState(true);

    // useEffect(() =>{               
    //     fetch('/api/words')
    //         .then((response) => {
    //             if (response.ok) { //Проверяем, что код ответа 200
    //                 return response.json();
    //             } else {
    //                 throw new Error('Something went wrong ...' );
    //             }
    //         })
    //         .then((response) => {
    //             setWords(response);
              
             
    //         });
    // }, []); 

   
    // if (words.length === 0) {
    //     return <div>Loading...</div>;
    // }

    // if (isErr) {
    //     return <p>{isErr.message}</p>;
    // }

    // if (isLoading) {
    //     return <p>Loading ...</p>;
    // }

  
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        fetch('/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
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
    }, []);

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }
    if (words.length === 0) {
        return <div>Loading...</div>;
    }
    return (

        <WordsContext.Provider value = { { words } }>
            <Router>
                <div className = "app">
                    <Header />
                    <Routes>
                        <Route  path="/Words" exact element={ <Table />}/>
                        <Route  path="/Words/game" element={<Card /> }/>
                        <Route  path="*" element={ <NotFound /> }/>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </WordsContext.Provider>
       
    );
};
