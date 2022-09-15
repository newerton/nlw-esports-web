import { Control, Controller, FieldValues } from 'react-hook-form';

import Input from './Input';
import Label from './Label';

type ControllerInputProps = {
  control: Control<FieldValues, any>;
  id: string;
  type?: string;
  label?: string;
  placeholder: string;
  error: string | undefined;
};

const ControllerInput = ({
  id,
  label,
  placeholder,
  error,
  type = 'text',
  ...rest
}: ControllerInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label id={id} title={label} />}
      <Controller
        {...rest}
        name={id}
        render={({ field }) => (
          <Input placeholder={placeholder} type={type} {...field} />
        )}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default ControllerInput;
