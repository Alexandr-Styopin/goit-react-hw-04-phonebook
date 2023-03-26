import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import Form from './form/Form';
import Contacts from './Contacts/Contacts';

import css from './App.module.css';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSumitForm = e => {
    e.preventDefault();

    if (contacts.filter(contact => contact.name.includes(name)).length !== 0) {
      alert(`${name} is already in contact`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { name: name, number: number, id: nanoid() },
    ]);
  };

  const handleInputFilter = e => {
    setFilter(e.target.value);
  };

  const filtredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleRemoveConact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(prevContact => prevContact.id !== id)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSumitForm} onChange={handleInputChange} />
      <Contacts
        filtredContacts={filtredContacts()}
        onClickRemove={handleRemoveConact}
        onChangeInput={handleInputFilter}
      />
    </div>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
Contacts.propTypes = {
  filtredContacts: PropTypes.array,
  onClickRemove: PropTypes.func,
  onChangeInput: PropTypes.func,
};
