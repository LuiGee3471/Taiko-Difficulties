import React from 'react';
import Genre from '../constants/Genre';

export default function GenreOption({ onChangeGenre }) {
    return (
        <label className="flex">
            <span className="w-20 text-sm self-center">장르</span>
            <select className="w-28 text-sm border-2 rounded" onChange={onChangeGenre}>
                <option value="All">전부</option>
                <option value={Genre.Pop}>POP</option>
                <option value={Genre.Anime}>애니메이션</option>
                <option value={Genre.Variety}>버라이어티</option>
                <option value={Genre.Vocaloid}>보컬로이드</option>
                <option value={Genre.Classical}>클래식</option>
                <option value={Genre.GameMusic}>게임 뮤직</option>
                <option value={Genre.NamcoOriginal}>남코 오리지널</option>
            </select>
        </label>
    );
}