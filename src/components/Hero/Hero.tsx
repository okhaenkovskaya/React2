import { FC} from 'react';

import style from "./Hero.module.scss";
import Button from "../Button";

const Hero: FC<PageContent.Page> = ({title, button, image}) => {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <div className={style.heroText}>
        <h1>{title}</h1>
        <Button to={button.url}>{button.title}</Button>
      </div>
    </div>
  );
};

export default Hero;
