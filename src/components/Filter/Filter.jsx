import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
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
