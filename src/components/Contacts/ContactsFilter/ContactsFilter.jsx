export default function ContactsFilter({ onChangeInput }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChangeInput} />
    </label>
  );
}
