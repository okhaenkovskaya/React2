import style from "./Hero.module.scss";
import Button from "../Button";


const Hero = ({heroData}) => {
  console.log(heroData, '-------heroData')

  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url("http://via.placeholder.com/640x360")` }}
    >
      <div className={style.heroText}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <Button to="/about">Go to page about</Button>
      </div>
    </div>
  );
};

export default Hero;
