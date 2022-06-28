import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import ProviderLayer from './ProviderLayer';


const firebaseConfig = {
    apiKey: "AIzaSyCOAugP2SvvQufzHVHXZ5WvoffuLzZ0mH4",
    authDomain: "final-project-7b9be.firebaseapp.com",
    projectId: "final-project-7b9be",
    storageBucket: "final-project-7b9be.appspot.com",
    messagingSenderId: "229712565038",
    appId: "1:229712565038:web:4c5f3894ee3c246af2e0bf"
  };
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <BrowserRouter>
     <ProviderLayer/>
    </BrowserRouter>
    </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
