import { render } from 'react-dom';
import React from 'react';
import dotenv from 'dotenv';

dotenv.config();

import App from './App';
import './main.scss';

const rootElement = document.getElementById('root');

render(<App />, rootElement);
