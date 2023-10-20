import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contacts';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
