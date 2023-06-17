import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './redux/store'
import { Provider } from "react-redux";
import AuthContextProvider from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
// import { ReactReduxContext } from 'react-redux';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  
    <ChakraProvider>
      <AuthContextProvider>

      <Provider store={store}>
 
          <App />
</Provider>

         

      </AuthContextProvider>
    </ChakraProvider>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
