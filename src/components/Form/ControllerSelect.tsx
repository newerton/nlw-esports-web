import { Control, Controller } from 'react-hook-form';

import { FormData } from '@components/CreateAdForm';

import Label from './Label';
import Select from './Select';

type ControllerSelectProps = {
  control: Control<FormData, any>;
  id: keyof FormData;
  type?: string;
  label?: string;
  placeholder: string;
  error: string | undefined;
  options: Array<{ [key: string]: string }> | any;
};

const ControllerSelect = ({
  id,
  label,
  placeholder,
  error,
  type = 'text',
  options,
  ...rest
}: ControllerSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <Label id={id} title={label} />}
      <Controller
        {...rest}
        name={id}
        render={({ field }) => (
          <Select placeholder={placeholder} options={options} {...field} />
        )}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default ControllerSelect;
