import { Link } from "react-router-dom";
import style from "./Button.module.scss";

type Props = {
  children: React.ReactNode | string;
  classes?: string;
  to?: string | undefined;
} & typeof defaultProps;

const defaultProps = {
  classes: style.button,
};

const Button = ({ children, classes, to }: Props) => {
  return to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes}>{children}</button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
