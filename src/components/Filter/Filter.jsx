import React from 'react';
import { useDispatch } from 'react-redux';
import { searchContacts } from '../../redux/contacts/contactSlice.js';
import searchCss from './search.module.css'
export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div className={searchCss.block}>
      Find contacts by name
      <input
        type="text"
        className={searchCss.textEl}
        onChange={e => dispatch(searchContacts(e.target.value))}
        placeholder="Search"
      />
    </div>
  );
}