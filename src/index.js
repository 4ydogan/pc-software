import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../src/css/bootstrap.min.css'
import '../src/css/bootstrap-grid.min.css'
import '../src/css/bootstrap-reboot.min.css'
import '../src/css/animate.css'
import '../src/css/owl.carousel.css'
import '../src/css/owl.theme.css'
import '../src/css/owl.transitions.css'
import '../src/css/magnific-popup.css'
import '../src/css/jquery.countdown.css'
// import '../src/css/style.css'

// import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
