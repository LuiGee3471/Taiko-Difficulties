import React from 'react';
import Song from './Song';

export default function SongList({ songs }) {
    return (
        <ul>
            { songs.map((song, index) => <Song song={song} index={index} /> )}
        </ul>
    )
}