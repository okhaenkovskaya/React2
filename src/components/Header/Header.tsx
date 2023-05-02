import Logo from './Logo';
import Button from '../Button/Button';
import { NavList, NavItem } from '../Nav';

import style from './Header.module.scss';

const Header = () => {

    return (
        <header className={style.header}>
            <Logo to='/' classes={style.logo} />

            <NavList>
                <NavItem to='/about'>About</NavItem>
                <NavItem to=''>Posts</NavItem>
                <NavItem to=''>Contact</NavItem>
            </NavList>

            <div className={style.btnWrap}>
                <Button>
                    Button text
                </Button>
                <Button to='/contact'>
                    Contact
                </Button>
            </div>
        </header>
    );
};

export default Header;