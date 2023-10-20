import css from './ContactForm.module.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts } from 'redux/contacts';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleAddContact = userContacts => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === userContacts.name.toLowerCase()
      )
    ) {
      alert(`${userContacts.name} is already in contacts`);
      return;
    }
    dispatch(setContacts(userContacts));
  };

  const handleInputChangeName = e => {
    setName(e.target.value);
  };
  const handleInputChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userContacts = {
      id: nanoid(),
      name,
      number,
    };

    handleAddContact(userContacts);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={handleInputChangeName}
          name="name"
          placeholder="Angelina Jolie"
          //  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я])$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={handleInputChangeNumber}
          name="number"
          placeholder="569-82-57"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button>Add contact</button>
    </form>
  );
};
