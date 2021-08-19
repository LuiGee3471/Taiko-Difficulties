import React, { useState } from 'react';
import Difficulty from './Difficulty';
import Genre from './Genre';
import SongTip from './SongTip';
import EasyIcon from './icons/EasyIcon';
import HardIcon from './icons/HardIcon';
import NormalIcon from './icons/NormalIcon';
import OniIcon from './icons/OniIcon';
import UraIcon from './icons/UraIcon';

export default function Song({ song, currentDifficulty }) {
    const [collapse, setCollapse] = useState(true);

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

    let className = 'relative z-10 w-9/12 mt-5 bg-song flex flex-col items-center justify-center rounded-md overflow-hidden';
    className += ' ' + genreBackground;
    className += ' ' + ((collapse) ? 'h-10' : 'h-24');

    const classNameOfDifficulty = "bg-gray-50 px-3 py-1 rounded-sm flex flex-col items-center"

    const tips = (currentDifficulty === Difficulty.Oni) ? song.tipsOni : song.tipsHard;
    const hasTips = Boolean(tips);

    const onClickSong = () => {
        setCollapse(!collapse);
    }

    return (
        <li className={className} onClick={onClickSong}>
            { !collapse && hasTips ? <SongTip tips={tips} /> : null}            
            <span className="px-4 text-black font-bold align-middle text-center">{song.title}</span>
            {!collapse ?
                <div className="w-full mt-2">
                    <ul className="flex justify-around">
                        <li className={classNameOfDifficulty}>
                            <EasyIcon />
                            {song[Difficulty.Easy]}
                        </li>
                        <li className={classNameOfDifficulty}>
                            <NormalIcon />
                            {song[Difficulty.Normal]}
                        </li>
                        <li className={classNameOfDifficulty}>
                            <HardIcon />
                            {song[Difficulty.Hard]}
                        </li>
                        <li className={classNameOfDifficulty}>
                            <OniIcon />
                            {song[Difficulty.Oni]}
                        </li>
                        {
                            song[Difficulty.Ura] ?
                                <li className={classNameOfDifficulty}>
                                    <UraIcon />
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