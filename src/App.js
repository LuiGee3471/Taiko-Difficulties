import './App.css';
import Header from './header/Header';
import { useEffect, useState } from 'react';
import Difficulty from './constants/Difficulty';
import songList from './songs';
import Main from './main/Main';
import Footer from './footer/Footer';
import FilterContext from './context/FilterContext';

function App() {
  const [currentFilter, setCurrentFilter] = useState({
    difficulty: Difficulty.Oni,
    ura: true,
    genre: "All",
    level: 8
  });

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

  const [songs, setSongs] = useState(filterSongs(currentFilter));
  useEffect(() => {
    setSongs(filterSongs(currentFilter));
  }, [currentFilter]);

  return (
    <>
      <FilterContext.Provider value={{ currentFilter, setCurrentFilter }}>
        <Header />
        <Main songs={songs} />
      </FilterContext.Provider>
      <Footer />
    </>
  );
}

export default App;
