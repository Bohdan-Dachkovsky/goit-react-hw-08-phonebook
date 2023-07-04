import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { dltUser } from "../../redux/operations.js";
import {
  getTasks,
  getStatusFilter,
  errorMessage,
  getLoading,
} from "../../redux/contacts/selectors.js";
const TaskList = styled.ul`
  display: block;
  width: 600px;
  list-style: none;
  list-style-type: none;
`;
const List = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  list-style: none;
  list-style-type: none;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
const Button = styled.button`
  border: 1px solid;
  margin-right: 4px;
  margin-left: 4px;
`;
export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getTasks);
  const isLoading = useSelector(getLoading);
  const error = useSelector(errorMessage);
  const filtered = useSelector(getStatusFilter);
 
  const contactsName = Array.isArray(contacts) ? [...contacts].filter((contact) => {
  if (!contact.name) {
    return [];
  }
       return contact.name.toLowerCase().includes(filtered.toLowerCase());
            }) : contacts;
  return (
    <TaskList>
      {error || <p>Add contact please!</p>}
      <li>
        <h2>Contacts</h2>
        {!contacts ? <p>No data contacts!</p> : undefined}
      </li>
      {Array.isArray(contactsName) || isLoading ? (
       [...contactsName].map((contact, idx, arr) => (
          <List key={idx}>
            {contact.name + ":" + contact.number}
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(dltUser(contact.id))}
            >
              Delete
            </Button>
          </List>
        )) 
      ) : (
        <p>Not available contacts!</p>
      )}
    </TaskList>
  );
}
