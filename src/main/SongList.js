import React, { useContext, useEffect, useState } from 'react';
import FilterContext from '../context/FilterContext';
import Song from './Song';
import songList from '../songs.js';
import Difficulty from '../constants/Difficulty';

export default function SongList() {
    const { currentFilter } = useContext(FilterContext);

    const filterSongs = ({ difficulty, ura, genre, level }) => {
        return songList.filter((song) => {
            if (difficulty === Difficulty.Oni) {
                return ((!song.ura && song[difficulty] === level)
                    || (ura && song.ura && song[Difficulty.Ura] === level))
                    && song['order_oni'] > 0;
            } else {
                return level === song[Difficulty.Hard] && song['order_hard'] > 0;
            }
        })
            .filter((song) => {
                return genre === "All" || genre === song.genre;
            })
            .sort((song1, song2) => {
                const order = difficulty === Difficulty.Oni ? 'order_oni' : 'order_hard';
                return song1[order] - song2[order];
            });
    }

    const songs = filterSongs(currentFilter);

    return (
        <ul className="z-10 flex flex-col items-center">
            { songs.map((song) => <Song
                key={song.id}
                song={song}
                currentDifficulty={currentFilter.difficulty} />)}
        </ul>
    )
}