import {
  getTasks,
  getLoading,
  errorMessage,
} from "../../redux/contacts/selectors.js";
import { useEffect } from "react";
import { getAllcontacts } from "../../redux/operations.js";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import { useDispatch, useSelector } from "react-redux";
import bookStyle from "./index.module.css";

const Collection = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getTasks);
  const isLoading = useSelector(getLoading);
  const error = useSelector(errorMessage);

  useEffect(() => {
    dispatch(getAllcontacts());
  }, [dispatch]);
  return (
    <div className={bookStyle.container}>
      {Array.isArray(contacts) > 0 && <h1>Phonebook</h1> && <ContactForm />}
      {Array.isArray(contacts) > 0 && <Filter />}
      {isLoading && !error && <b>Request in progress...</b>}
      {!error && <ContactList />}
    </div>
  );
};
export default Collection;
