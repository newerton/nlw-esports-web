import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {};

const Checkbox = (
  { ...rest }: CheckboxProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  return (
    <input
      {...rest}
      ref={ref}
      type="checkbox"
      placeholder="Selecione o game que deseja jogar"
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
    />
  );
};

export default forwardRef(Checkbox);
