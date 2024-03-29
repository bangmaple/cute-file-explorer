import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";
import CardGame from "./components/CardGame";
import MoneyLover from "./components/MoneyLover";
import useFontFaceObserver from 'use-font-face-observer';


const EntryPoint = () => {

  useEffect(() => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      
      spinner.style.display = 'none';
    }
  }, []);

  return (<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation/>}/>
                <Route path="/explorer" element={<App/>}/>
                <Route path="/card" element={<CardGame/>}/>
                <Route path="/money" element={<MoneyLover/>}/>
                <Route path="/lucky" element={<CardGame/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>);
}

ReactDOM.render(<EntryPoint/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
