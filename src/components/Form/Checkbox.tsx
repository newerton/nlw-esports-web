import * as ReactCheckbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { Ref, forwardRef } from 'react';

type CheckboxProps = ReactCheckbox.CheckboxProps & {
  onChange: (event: any) => void;
};

const Checkbox = ({ ...rest }: CheckboxProps, ref: Ref<any> | undefined) => {
  return (
    <ReactCheckbox.Root
      checked={rest.checked}
      onCheckedChange={rest.onChange}
      className="w-6 h-6 p-1 rounded bg-zinc-900 items-center"
      ref={ref}
      id={rest.name}
      defaultValue={rest.value}
      {...rest}
    >
      <ReactCheckbox.Indicator>
        <Check className="w-4 h-4 text-emerald-400" />
      </ReactCheckbox.Indicator>
    </ReactCheckbox.Root>
  );
};

export default forwardRef(Checkbox);
