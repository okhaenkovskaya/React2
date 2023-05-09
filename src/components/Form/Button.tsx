import style from "./Form.module.scss";

type Props = {
  children: React.ReactNode | string;
  innerRef?: any | null;
  isDisabled?: boolean;
  clickFunction?: any | undefined;
  type?: any;
} & typeof defaultProps;

const defaultProps = {
  type: "submit",
  classes: "",
  isDisabled: false,
  innerRef: null,
  clickFunction: undefined,
};

const Button = ({
  children,
  innerRef,
  isDisabled,
  clickFunction,
  type,
}: Props) => (
  <button
    className={style.button}
    type={type}
    ref={innerRef}
    disabled={isDisabled}
    onClick={clickFunction}
  >
    {children}
  </button>
);

Button.defaultProps = defaultProps;

export default Button;
