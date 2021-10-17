import React, { useContext } from 'react';
import Difficulty from '../constants/Difficulty';
import FilterContext from '../context/FilterContext';

export default function DifficultyOption() {
    const { currentFilter, setCurrentFilter } = useContext(FilterContext);

    const onChangeDifficulty = (e) => {
        const value = e.target.value;
        let newDifficulty = null;
        let currentLevel = 8;
        if (value === '귀신') {
            newDifficulty = Difficulty.Oni;
        } else {
            newDifficulty = Difficulty.Hard;
            currentLevel = 8;
        }
        setCurrentFilter({
            ...currentFilter,
            difficulty: newDifficulty,
            level: currentLevel
        });
    }

    const onCheckUra = (e) => {
        setCurrentFilter({
            ...currentFilter,
            ura: e.target.checked
        });
    }

    return (
        <label className="flex">
            <span className="w-20 text-sm self-center">난이도</span>
            <select className="w-28 text-sm border-2 rounded mr-5" onChange={onChangeDifficulty}>
                <option value={Difficulty.Oni}>{Difficulty.Oni}</option>
                <option value={Difficulty.Hard}>{Difficulty.Hard}</option>
            </select>
            {
                currentFilter.difficulty === Difficulty.Oni ?
                    <label className="flex">
                        <input type="checkbox" className="mr-2 self-center" defaultChecked={currentFilter.ura} onChange={onCheckUra} />
                        <span className="text-xs self-center">뒷면 포함</span>
                    </label>
                    :
                    null
            }

        </label>
    );
}