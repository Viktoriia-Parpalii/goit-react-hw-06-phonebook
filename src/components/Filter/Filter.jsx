import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setFilter } from 'redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const getContactFromFilter = () => {
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return dispatch(setContacts(filterContacts));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
    getContactFromFilter();
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterChange}
      />
    </>
  );
};
