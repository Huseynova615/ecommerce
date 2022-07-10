import React from 'react'
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';

// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<Router>
//             <Provider store={store}>
//              <App/>
//          </Provider>
//         </Router>
//     );


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
);

