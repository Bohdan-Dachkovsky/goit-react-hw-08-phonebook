import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Provider} from 'react-redux'
import {store} from './redux/store.js';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store}>
<React.StrictMode>
<Router  basename="/goit-react-hw-08-phonebook/">
 <App />
 </Router>
 </React.StrictMode>
</Provider>

 
);
