import style from "./Form.module.scss";

type Props = {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  isRequired?: boolean;
  changeFunction: void | any;
} & typeof defaultProps;

const defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  isRequired: false,
};

const Input = ({
  type,
  name,
  placeholder,
  value,
  isRequired,
  changeFunction,
}: Props) => (
  <input
    className={style.input}
    type={type}
    onChange={changeFunction}
    name={name}
    required={isRequired}
    placeholder={placeholder}
    defaultValue={value}
  />
);

Input.defaultProps = defaultProps;

export default Input;
