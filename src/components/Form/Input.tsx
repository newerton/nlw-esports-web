import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

const Input = (
  { ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  return (
    <input
      {...rest}
      ref={ref}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 w-full"
    />
  );
};

export default forwardRef(Input);
