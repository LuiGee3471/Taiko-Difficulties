import React from 'react';
import Difficulty from './Difficulty';

export default function Song({ song, index }) {
    return (
        <li key={index}>
            { song.title } { song[Difficulty.Hard] } { song[Difficulty.Oni] }
        </li>
    )
}