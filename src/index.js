import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {Provider} from 'react-redux'
import {store} from './redux/store.js';
import './index.css';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter} from 'react-router-dom'
let persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store}>
<React.StrictMode>
<BrowserRouter  basename="/goit-react-hw-08-phonebook">
<PersistGate loading={null} persistor={persistor}>
 <App />
 </PersistGate>
 </BrowserRouter>
 </React.StrictMode>
</Provider>

 
);
