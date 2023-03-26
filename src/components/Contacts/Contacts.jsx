import PropTypes from 'prop-types';

import ContactsItem from './ContactsItem/ContactsItem';
import ContactsFilter from './ContactsFilter/ContactsFilter';

export default function Contacts({
  onClickRemove,
  filtredContacts,
  onChangeInput,
}) {
  return (
    <div>
      <h2>Contacts</h2>

      <ContactsFilter onChangeInput={onChangeInput} />
      <ul>
        <ContactsItem
          onClickRemove={onClickRemove}
          filtredContacts={filtredContacts}
        />
      </ul>
    </div>
  );
}
ContactsFilter.propTypes = {
  onChangeInput: PropTypes.func,
};

ContactsItem.propTypes = {
  onClickRemove: PropTypes.func,
  filtredContacts: PropTypes.array,
};
