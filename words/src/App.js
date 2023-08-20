import React,{useState, useEffect} from 'react';
import { Provider } from 'mobx-react';


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
import WordsStore from './store/WordsStore';







export default function App() {

  


    return (
        <Provider store={WordsStore}>
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
        </Provider>
    );
};



