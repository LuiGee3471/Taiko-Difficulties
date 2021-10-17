import React, { useContext } from 'react';
import Difficulty from '../constants/Difficulty';
import FilterContext from '../context/FilterContext';

export default function LevelOption() {
    const { currentFilter, setCurrentFilter } = useContext(FilterContext);
    const levels = currentFilter.difficulty === Difficulty.Oni ? [8, 7, 6, 5, 4] : [8, 7];

    const onChangeLevel = (e) => {
        setCurrentFilter({
            ...currentFilter,
            level: +e.target.value
        });
    }

    return (
        <label className="flex">
            <span className="w-20 text-sm self-center">★</span>
            <select className="w-28 text-sm border-2 rounded" onChange={onChangeLevel} value={currentFilter.level}>
                {
                    levels.map((level, index) => <option value={level} key={index}>{level}</option>)
                }
            </select>
        </label>
    );
}