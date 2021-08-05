import React, { useState } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

export default function Header({ onChangeDifficulty }) {
    const [isVisible, setVisible] = useState(false);
    const onClickMenu = () => {
        setVisible(!isVisible);
    }

    return (
        <header className="bg-header">
            <MainHeader onClickMenu={onClickMenu}/>
            <SubHeader 
                isVisible={isVisible}
                onChangeDifficulty={onChangeDifficulty}
            />
        </header>
    )
}