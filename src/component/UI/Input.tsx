import { useId } from "react";

import { InputProps } from "../../config/types";

const Input = (props: InputProps) => {
  const { label, type, value, placeholder, onChange } = props;

  const inputId = useId();

  return (
    <>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        className="p-2 border w-full rounded-md"
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
