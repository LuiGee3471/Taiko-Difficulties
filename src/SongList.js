import React from 'react';
import Song from './Song';

export default function SongList({ songs, onClickSong, currentDifficulty }) {
    return (
        <ul className="z-10 flex flex-col items-center">
            { songs.map((song) => <Song 
                key={song.id} 
                song={song} 
                onClickSong={onClickSong} 
                currentDifficulty={currentDifficulty} />)}
        </ul>
    )
}