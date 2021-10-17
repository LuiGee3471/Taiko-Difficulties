import React from 'react';
import DifficultyOption from './DifficultyOption';
import GenreOption from './GenreOption';
import LevelOption from './LevelOption';

export default function SubHeader({ isVisible }) {
    const className = "z-50 flex flex-col justify-around bg-white w-full px-4 transition-all duration-150 overflow-hidden " + (isVisible ? 'h-28' : 'h-0');

    return (
        <div className={className}>
            <DifficultyOption />
            <GenreOption />
            <LevelOption />
        </div>
    )
}