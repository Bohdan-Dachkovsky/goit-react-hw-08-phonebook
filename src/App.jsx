import React from 'react';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import Filter from './components/Filter/Filter.jsx';
import {getTasks, getLoading, errorMessage} from './redux/contacts/selectors.js';
import {useSelector, useDispatch} from 'react-redux';
import {getAllcontacts} from './redux/operations.js';
import mainStyle from './index.css';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const error = useSelector(errorMessage);
  useEffect(() => {
    dispatch(getAllcontacts());
  }, [dispatch]);
  const contacts = useSelector(getTasks);
  return (
    <div className={mainStyle.container}
  >
    <h1>Phonebook</h1>
    <ContactForm />
    {contacts.length > 0 || <Filter />}
    {isLoading && !error && <b>Request in progress...</b>}
    {!error && <ContactList />}
  </div>
  )
}

