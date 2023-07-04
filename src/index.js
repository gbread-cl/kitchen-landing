import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MainScreen} from "./MainScreen";
import {Preferences} from "./Preferences";
import {Portfolio} from "./Portfolio";
import {Facade} from "./Facade";
import {Line} from "./Line";
import {Order} from "./Order";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <MainScreen/>
        <Preferences/>
        <Line/>
        <Order/>
        <Line/>
        <Facade/>
        <Portfolio/>
        <Line/>

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
