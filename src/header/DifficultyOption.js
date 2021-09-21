import React from 'react';
import Difficulty from '../constants/Difficulty';

export default function DifficultyOption({ 
    currentDifficulty,
    onChangeDifficulty, 
    isListingUra,
    onCheckUra
}) {
    return (
        <label className="flex">
            <span className="w-20 text-sm self-center">난이도</span>
            <select className="w-28 text-sm border-2 rounded mr-5" onChange={onChangeDifficulty}>
                <option value={Difficulty.Oni}>{Difficulty.Oni}</option>
                <option value={Difficulty.Hard}>{Difficulty.Hard}</option>
            </select>
            {
                currentDifficulty === Difficulty.Oni ?
                <label className="flex">
                    <input type="checkbox" className="mr-2 self-center" defaultChecked={isListingUra} onChange={onCheckUra}/>
                    <span className="text-xs self-center">뒷면 포함</span>
                </label>
                :
                null
            }
            
        </label>
    );
}