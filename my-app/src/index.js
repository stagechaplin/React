import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import NotificationList from './Ch06/NotificationList';
import Hello from './Ch03/Hello';
import Library from './Ch03/Library';
import Clock from './Ch04/Clock';
import Counter from './Ch07/Counter';
import CommentList from './Ch05/CommentList';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <Counter/>
);

    reportWebVitals();
