import React from 'react';
import Difficulty from './Difficulty';

export default function LevelOption({ 
    currentDifficulty,
    currentLevel,
    onChangeLevel 
}) {
    const levels = currentDifficulty === Difficulty.Oni ? [10, 9, 8, 7, 6, 5, 4] : [8, 7];

    return (
        <label className="flex">
            <span className="w-20 text-sm self-center">★</span>
            <select className="w-28 text-sm border-2 rounded" onChange={onChangeLevel} value={currentLevel}>
                {
                    levels.map((level, index) => <option value={level} key={index}>{level}</option>)
                }
            </select>
        </label>
    );
}