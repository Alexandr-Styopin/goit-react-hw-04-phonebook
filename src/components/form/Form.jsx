import InputName from './input-name/InpitName';
import InputNumber from './input-number/InputNumer';
import InputButtin from './inbut-button/InputButtin';
export default function form({ onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit} onChange={onChange}>
      <InputName />
      <InputNumber />
      <InputButtin />
    </form>
  );
}
