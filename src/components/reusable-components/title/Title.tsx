import BlueLine from '../blueLine/BlueLine';
import { TitleProps } from '../models';

const Title = ({ title, className }: TitleProps) => {
  return (
    <div>
      <h1 className={className}>{title}</h1>
      <BlueLine />
    </div>
  );
};

export default Title;
