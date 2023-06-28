import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import { useEffect } from 'react';
import {Layout} from './components/Layout.jsx'
import {Collection} from './components/Collection/Collection.jsx';
import {Register} from './components/Register/Register.jsx';
import {useDispatch} from 'react-redux';
import {getAllcontacts} from './redux/operations.js';


export const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllcontacts());
  }, [dispatch]);
  
  return (
    <Suspense>
      <Routes>
        <Route path = '/register' element={Layout} > 
        <Route index element ={Register} />
        <Route path='login'>
        <Route path='contacts' element = {Collection}/>
        </Route>
       </Route>
      </Routes>
    </Suspense>
  )
}

