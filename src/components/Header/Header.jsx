import React from 'react'
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img src='https://images.vexels.com/media/users/3/141120/isolated/preview/a5ff757d7423e6c757795e7b60183180-rocket-round-icon-by-vexels.png' alt=''/>
        </header>
    );
}

export default Header;