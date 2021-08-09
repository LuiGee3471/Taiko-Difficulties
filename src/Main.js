import React from 'react';
import Background from './Background';
import SongList from './SongList';

export default function Main({ songs }) {
    return (
        <main className="relative"> 
            <Background />
            <SongList 
                songs={songs}
            />
        </main>
    )
}