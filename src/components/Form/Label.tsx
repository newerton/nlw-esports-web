import { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  title: string;
};
const Label = ({ id, title, ...rest }: LabelProps) => {
  return (
    <label {...rest} htmlFor={id} className="font-semibold">
      {title}
    </label>
  );
};

export default Label;
