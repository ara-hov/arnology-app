import { InputProps } from '../models';
import './input.scss';

const Input = ({
  name,
  value,
  placeholder,
  type,
  className,
  onChange,
  checked,
  onBlur,
  errorsMessage,
}: InputProps) => {
  return (
    <div className='input__container'>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={onChange}
        checked={checked}
        onBlur={onBlur}
      />
      {errorsMessage && (
        <div className='input__container--error'>{errorsMessage}</div>
      )}
    </div>
  );
};

export default Input;
