import style from "./Form.module.scss";

type Props = {
  children: React.ReactNode;
  submitFunction: void | any;
  innerRef: any;
} & typeof defaultProps;

const defaultProps = {
  innerRef: null,
};

const Form = ({ children, submitFunction, innerRef }: Props) => (
  <form className={style.form} ref={innerRef} onSubmit={submitFunction}>
    {children}
  </form>
);

Form.defaultProps = defaultProps;

export default Form;
