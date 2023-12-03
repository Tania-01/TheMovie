import React from 'react';

import style from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={style.Header}>
            <NavLink to={'movie'}>mobie</NavLink>
        </div>
    );
};

export default Header;