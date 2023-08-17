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
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

import { WordsContext }   from './components/WordsContextProvider/WordsContextProvider';





export default function App() {

  
    const [words, setWords] = useState([]);
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
    }, [flag] );

    const tryAgain = () => {
    
        setFlag(!flag);
    };
    
    if (error) {
        return(
            <Error
                error = {Error.message}
                onClick = { tryAgain }
            />
        );
    }



    return (

        <WordsContext.Provider value = { { words, flag, setFlag} }>
            <Router>
                <div className = "app">
                    <Header />
                    <Routes>
                        <Route  
                            path="/Words" 
                            exact element={(isLoading || words.length === 0) ? <Loader/> : <Table/> }/>
                        <Route  
                            path="/Words/game" 
                            element={(isLoading || words.length === 0) ? <Loader/> : <Card/> }/>
                        <Route  
                            path="*" 
                            element={ <NotFound /> }/>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </WordsContext.Provider>
       
    );
};
