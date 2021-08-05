import React from 'react';
import Difficulty from './Difficulty';
import Genre from './Genre';

export default function SubHeader({ isVisible, onChangeDifficulty }) {
    const className = "fixed flex flex-col justify-around bg-red-50 w-full px-4 transition-all duration-150 overflow-hidden " + (isVisible ? 'h-28' : 'h-0');

    return (
        <div className={className}>
            <label className="flex">
                <span className="w-20 text-sm self-center">난이도</span>
                <select className="w-28 text-sm border-2 rounded mr-5" onChange={onChangeDifficulty}>
                    <option value={Difficulty.Oni}>{Difficulty.Oni}</option>
                    <option value={Difficulty.Hard}>{Difficulty.Hard}</option>
                </select>
                <label className="flex">
                    <input type="checkbox" className="mr-2 self-center" />
                    <span className="text-xs self-center">뒷면 포함</span>
                </label>
            </label>
            <label className="flex">
                <span className="w-20 text-sm self-center">장르</span>
                <select className="w-28 text-sm border-2 rounded">
                    <option value="null">전부</option>
                    <option value={Genre.Pop}>POP</option>
                    <option value={Genre.Anime}>애니메이션</option>
                    <option value={Genre.Variety}>버라이어티</option>
                    <option value={Genre.Vocaloid}>보컬로이드</option>
                    <option value={Genre.Classical}>클래식</option>
                    <option value={Genre.GameMusic}>게임 뮤직</option>
                    <option value={Genre.NamcoOriginal}>남코 오리지널</option>
                </select>
            </label>
            <label className="flex">
                <span className="w-20 text-sm self-center">★</span>
                <select className="w-28 text-sm border-2 rounded">
                    <option value="10">10</option>
                    <option value="9">9</option>
                    <option value="8">8</option>
                    <option value="7">7</option>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                </select>
            </label>
        </div>
    )
}