import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import Song from './Song';

export default function SongList({ songs }) {
    const { currentFilter } = useContext(FilterContext);

    return (
        <ul className="z-10 flex flex-col items-center">
            { songs.map((song) => <Song
                key={song.id}
                song={song}
                currentDifficulty={currentFilter.difficulty} />)}
        </ul>
    )
}