import { FC } from 'react';
import { ButtonProps } from '../models';
import './button.scss';

const Button: FC<ButtonProps> = ({ className, buttonText, type }) => {
  return (
    <button className={className} type={type}>
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
