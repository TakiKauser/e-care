import React from 'react';
import Info from '../../Shared/Info/Info';
import Menubar from '../../Shared/Menubar/Menubar';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Info></Info>
            <Menubar></Menubar>
        </div>
    );
};

export default Header;