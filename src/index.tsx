import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line sort-imports
import { App } from './app/App';

const appElement: HTMLElement | null = document.getElementById('app');

ReactDOM.render(<App />, appElement);
