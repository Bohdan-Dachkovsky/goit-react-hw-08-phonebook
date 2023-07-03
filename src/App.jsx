import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import { useEffect } from 'react';
import {PrivateRoute} from './components/PrivateRoute.js'
import {RestrictedRoute} from './components/RestrictedRoute.js'
import Layout from './components/Layout/Layout.jsx'
import Collection from './pages/Collection/Collection.jsx';
import Register from './pages/Register/Register.jsx';
import ContactLogin from './pages/ContactLogin/ContactLogin.jsx'
import {useDispatch} from 'react-redux';
import {refreshUser} from './redux/operations.js';
import Home from './pages/Home/Home.jsx';


export const App = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <Suspense>
      <Routes>
        <Route exact path = '/' element={<Layout/>} > 
        <Route index element ={<Home/>} />
        <Route exact path = '/register' element ={ <RestrictedRoute redirectTo="/contacts" component={<Register/>} />} />
        <Route exact path= '/login' element = { <RestrictedRoute redirectTo="/contacts" component={<ContactLogin/>} /> }/>
        <Route path= '/contacts' element = {<PrivateRoute redirectTo="login" component={<Collection/>} />}/>
      </Route>
      </Routes>
    </Suspense>
  )
}

