import React, { useState } from 'react';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

export default function Header({ 
    currentDifficulty,
    isListingUra,
    currentLevel,
    onChangeDifficulty, 
    onCheckUra,
    onChangeGenre,
    onChangeLevel
}) {
    const [isVisible, setVisible] = useState(false);
    const onClickMenu = () => {
        setVisible(!isVisible);
    }

    return (
        <header className="bg-header sticky">
            <MainHeader onClickMenu={onClickMenu}/>
            <SubHeader
                isVisible={isVisible}
                currentDifficulty={currentDifficulty}
                isListingUra={isListingUra}
                currentLevel={currentLevel}
                onChangeDifficulty={onChangeDifficulty}
                onCheckUra={onCheckUra}
                onChangeGenre={onChangeGenre}
                onChangeLevel={onChangeLevel}
            />
        </header>
    )
}