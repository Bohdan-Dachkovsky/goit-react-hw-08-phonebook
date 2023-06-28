import {getTasks, getLoading, errorMessage} from '../../redux/contacts/selectors.js';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';
import bookStyle from './index.module.css';
const Collection = () => {
    const contacts = useSelector(getTasks);
    const isLoading = useSelector(getLoading);
    const error = useSelector(errorMessage);
return (
    <div className={bookStyle.container}
  >
    <h1>Phonebook</h1>
    <ContactForm />
    {contacts.length > 0 || <Filter />}
    {isLoading && !error && <b>Request in progress...</b>}
    {!error && <ContactList />}
  </div>
    )
}
export default Collection