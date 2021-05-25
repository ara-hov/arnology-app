import { SelectProps } from '../models';

const Select = ({ children, className }: SelectProps) => {
  return <select className={className}>{children}</select>;
};

export default Select;
