import React from 'react';
import Song from './Song';

export default function SongList({ songs, onClickSong }) {
    return (
        <ul className="z-10 flex flex-col items-center">
            { songs.map((song) => <Song key={song.id} song={song} onClickSong={onClickSong} /> )}
        </ul>
    )
}