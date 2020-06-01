import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index.jsx';

const HOT_MODULE_ROOT = hot(App);

const APP_ROOT = document.getElementById("app");

ReactDOM.render(<HOT_MODULE_ROOT />, APP_ROOT);

