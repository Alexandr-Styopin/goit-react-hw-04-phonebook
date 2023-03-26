import css from '../ContactsItem/ContactsItem.module.css';

export default function Contacts({ onClickRemove, filtredContacts }) {
  return filtredContacts.map(contact => (
    <li className={css.contactItem} key={contact.id}>
      <p className={css.contactText}>
        {contact.name}: {contact.number}
      </p>

      <button
        className={css.contactBtn}
        type="button"
        onClick={() => onClickRemove(contact.id)}
      >
        Delete
      </button>
    </li>
  ));
}
