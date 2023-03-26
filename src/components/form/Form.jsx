import InputName from './input-name/InpitName';
import InputNumber from './input-number/InputNumer';
import InputButtin from './inbut-button/InputButtin';
import css from '../form/Form.module.css';
export default function form({ onSubmit, onChange }) {
  return (
    <form className={css.submitForm} onSubmit={onSubmit} onChange={onChange}>
      <InputName />
      <InputNumber />
      <InputButtin />
    </form>
  );
}
