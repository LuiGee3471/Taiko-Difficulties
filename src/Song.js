import React from 'react';
import Difficulty from './Difficulty';
import Genre from './Genre';

export default function Song({ song, onClickSong }) {
    let genreBackground = 'bg-';
    switch (song.genre) {
        case Genre.Pop:
            genreBackground += 'pop'
            break;
        case Genre.Anime:
            genreBackground += 'anime';
            break;
        case Genre.Classical:
            genreBackground += 'classical'
            break;
        case Genre.GameMusic:
            genreBackground += 'game-music';
            break;
        case Genre.NamcoOriginal:
            genreBackground += 'original';
            break;
        case Genre.Variety:
            genreBackground += 'variety'
            break;
        case Genre.Vocaloid:
            genreBackground += 'vocaloid';
            break;
        default:
            break;
    }

    let className = 'z-10 w-9/12 mt-5 bg-song flex flex-col items-center justify-center rounded-md';
    className += ' ' + genreBackground;
    className += ' ' + ((song.collapse) ? 'h-10' : 'h-24');

    const classNameOfDifficulty = "bg-gray-50 px-3 py-1 rounded-sm flex flex-col items-center"

    const classNameOfImg = "w-5 h-5";

    return (
        <li className={className} onClick={() => onClickSong(song.id)}>
            <span className="px-4 text-black font-bold align-middle text-center">{song.title}</span>
            {!song.collapse ?
                <div className="w-full mt-2">
                    <ul className="flex justify-around">
                        <li className={classNameOfDifficulty}>
                            <img className={classNameOfImg} src="/images/ico-easy.png" alt="쉬움" />
                            {song[Difficulty.Easy]}
                        </li>
                        <li className={classNameOfDifficulty}>
                            <img className={classNameOfImg} src="/images/ico-normal.png" alt="보통" />
                            {song[Difficulty.Normal]}
                        </li>
                        <li className={classNameOfDifficulty}>
                            <img className={classNameOfImg} src="/images/ico-hard.png" alt="어려움" />
                            {song[Difficulty.Hard]}
                        </li>
                        <li className={classNameOfDifficulty}>
                            <img className={classNameOfImg} src="/images/ico-oni.png" alt="귀신" />
                            {song[Difficulty.Oni]}
                        </li>
                        {
                            song[Difficulty.Ura] ?
                                <li className={classNameOfDifficulty}>
                                    <img className={classNameOfImg} src="/images/ico-ura.png" alt="뒷면" />
                                    {song[Difficulty.Ura]}
                                </li>
                                : null
                        }
                    </ul>
                </div>
                : null
            }
        </li>
    )
}