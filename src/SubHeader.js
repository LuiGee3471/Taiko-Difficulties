import React from 'react';
import DifficultyOption from './DifficultyOption';
import GenreOption from './GenreOption';
import LevelOption from './LevelOption';

export default function SubHeader({ 
    isVisible,
    currentDifficulty,
    isListingUra,
    currentLevel,
    onChangeDifficulty, 
    onCheckUra,
    onChangeGenre, 
    onChangeLevel,
}) {
    const className = "z-10 fixed flex flex-col justify-around bg-red-50 w-full px-4 transition-all duration-150 overflow-hidden " + (isVisible ? 'h-28' : 'h-0');

    return (
        <div className={className}>
            <DifficultyOption 
                currentDifficulty={currentDifficulty}
                onChangeDifficulty={onChangeDifficulty}
                isListingUra={isListingUra}
                onCheckUra={onCheckUra}
            />
            <GenreOption 
                onChangeGenre={onChangeGenre}
            />
            <LevelOption 
                currentDifficulty={currentDifficulty}
                currentLevel={currentLevel}
                onChangeLevel={onChangeLevel}
            />
        </div>
    )
}