import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIWUEEe0oqwMZZt5rwKw5GSwoAe5hfeVY",
  authDomain: "portafolio-dd96b.firebaseapp.com",
  databaseURL: "https://portafolio-dd96b.firebaseio.com",
  projectId: "portafolio-dd96b",
  storageBucket: "portafolio-dd96b.appspot.com",
  messagingSenderId: "101449042656",
  appId: "1:101449042656:web:d1b5cb2892372989c11e85",
  measurementId: "G-1B6GLPYD91"
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} >
     <App />
  </FirebaseAppProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
