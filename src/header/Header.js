import React, { useState } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

export default function Header() {
    const [isVisible, setVisible] = useState(false);
    const onClickMenu = () => {
        setVisible(!isVisible);
    }

    return (
        <header className="bg-header fixed w-full z-50 top-0">
            <MainHeader onClickMenu={onClickMenu} />
            <SubHeader isVisible={isVisible} />
        </header>
    )
}