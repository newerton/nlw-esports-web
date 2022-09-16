import * as ReactSelect from '@radix-ui/react-select';
import { CaretDown, CaretUp, Check } from 'phosphor-react';
import { Ref, forwardRef } from 'react';

type SelectProps = ReactSelect.SelectProps & {
  placeholder: string;
  options: Array<{ [key: string]: string }> | any;
  onChange: (event: any) => void;
};

const Select = (
  { placeholder, options, ...rest }: SelectProps,
  ref: Ref<any> | undefined,
) => {
  const label = options.find((option: any) => option.id === rest.value);
  return (
    <div ref={ref}>
      <ReactSelect.Root
        value={rest.value}
        onValueChange={rest.onChange}
        {...rest}
      >
        <ReactSelect.Trigger className="flex items-center justify-between rounded text-sm text-zinc-500 bg-zinc-900 py-3 px-4 w-full">
          <ReactSelect.Value>
            {label ? label.title : placeholder}
          </ReactSelect.Value>
          <ReactSelect.Icon className="w-4 h-4 text-zinc-400">
            <CaretDown />
          </ReactSelect.Icon>
        </ReactSelect.Trigger>
        <ReactSelect.Portal>
          <ReactSelect.Content className="bg-zinc-800 text-white text-md rounded shadow-md">
            <ReactSelect.ScrollUpButton>
              <CaretUp />
            </ReactSelect.ScrollUpButton>
            <ReactSelect.Viewport className="p-2">
              {options.map((option: any) => (
                <ReactSelect.Item
                  key={option.id}
                  value={option.id}
                  className="p-2 hover:bg-zinc-900 rounded cursor-pointer flex items-center justify-between pl-8"
                >
                  <ReactSelect.ItemText>{option.title}</ReactSelect.ItemText>
                  <ReactSelect.ItemIndicator className="absolute left-4 text-zinc-500">
                    <Check className="w-4 h-4 text-white" />
                  </ReactSelect.ItemIndicator>
                </ReactSelect.Item>
              ))}
            </ReactSelect.Viewport>
            <ReactSelect.ScrollDownButton>
              <CaretDown />
            </ReactSelect.ScrollDownButton>
          </ReactSelect.Content>
        </ReactSelect.Portal>
      </ReactSelect.Root>
    </div>
  );
};
export default forwardRef(Select);
