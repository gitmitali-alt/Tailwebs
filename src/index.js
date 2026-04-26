import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap Config
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';

let rootEl = document.getElementById('root');
let root = ReactDOM.createRoot(rootEl);
root.render(<App />)
