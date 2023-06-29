import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import { useEffect } from 'react';
import Layout from './components/Layout/Layout.jsx'
import Collection from './components/Collection/Collection.jsx';
import Register from './components/Register/Register.jsx';
import ContactLogin from './components/ContactLogin/ContactLogin.jsx'
import {useDispatch} from 'react-redux';
import {getAllcontacts, getNewUser} from './redux/operations.js';


export const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getAllcontacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getNewUser());
  }, [dispatch]);
  
  return (
    <Suspense>
      <Routes>
        <Route path = '/' element={<Layout/>} > 
        <Route path = 'register' element ={<Register/>} />
        <Route path= 'login' element = {<ContactLogin/>}/>
        <Route path= 'contacts' element = {<Collection/>}/>
      </Route>
      </Routes>
    </Suspense>
  )
}

