import {
  getTasks,
  errorMessage
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
  const inform = useSelector(errorMessage)
  // const isLoading = useSelector(getLoading);


  useEffect(() => {
    dispatch(getAllcontacts());
  }, [dispatch]);
  return (
    <div className={bookStyle.container}>
      <ContactForm />
     {!contacts && <Filter />}
      {inform && <b>Request in progress...</b>}
       <ContactList />
    </div>
  );
};
export default Collection;
