import { ButtonProps } from "../../config/types";

const Button = (props: ButtonProps) => {
  const { label, type = "button", disabled = false, onClick } = props;

  return (
    <button className="w-full" type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
