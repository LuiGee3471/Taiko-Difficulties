import React from 'react';
import Background from './Background';
import SongList from './SongList';

export default function Main({ songs, currentDifficulty }) {
    return (
        <main className="relative pb-5 pt-12"> 
            <Background />
            <SongList 
                songs={songs}
                currentDifficulty={currentDifficulty}
            />
        </main>
    )
}