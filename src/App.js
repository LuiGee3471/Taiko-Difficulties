import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import Difficulty from './Difficulty';
import Genre from './Genre';
import songList from './songs';
import Main from './Main';
import Background from './Background';

function App() {
  const filterSongs = ({ difficulty, ura, genre, level }) => {
    return songList.filter((song) => {
      const uraLevel = song[Difficulty.Ura];
      return song[difficulty] === level || (ura && uraLevel === level);
    })
    .filter((song) => {
      return genre === "All" || genre === song.genre;
    })
    .sort((song1, song2) => {
      const order = difficulty === Difficulty.Oni ? 'order_oni' : 'order_hard';
      return song1[order] - song2[order];
    });
  }

  const [currentFilter, setCurrentFilter] = useState({
    difficulty: Difficulty.Oni,
    ura: true,
    genre: "All",
    level: 10
  });

  const [ songs, setSongs ] = useState(filterSongs(currentFilter));
  useEffect(() => {
    setSongs(filterSongs(currentFilter));
  }, [currentFilter]);

  const onChangeDifficulty = (e) => {
    const value = e.target.value;
    let newDifficulty = null;
    let currentLevel = 10;
    if (value === '귀신') {
      newDifficulty = Difficulty.Oni;
    } else {
      newDifficulty = Difficulty.Hard;
      currentLevel = 8;
    }
    setCurrentFilter({
      ...currentFilter,
      difficulty: newDifficulty,
      level: currentLevel
    });
  }

  const onCheckUra = (e) => {
    setCurrentFilter({
      ...currentFilter,
      ura: e.target.checked
    });
  }

  const onChangeGenre = (e) => {
    const newGenre = e.target.value;
    setCurrentFilter({
      ...currentFilter,
      genre: newGenre
    });
  }

  const onChangeLevel = (e) => {
    setCurrentFilter({
      ...currentFilter,
      level: +e.target.value
    });
  }

  return (
    <>      
      <Header
        currentDifficulty={currentFilter.difficulty}
        isListingUra={currentFilter.ura}
        currentLevel={currentFilter.level}
        onChangeDifficulty={onChangeDifficulty}
        onCheckUra={onCheckUra}
        onChangeGenre={onChangeGenre}
        onChangeLevel={onChangeLevel}
      />
      <Main
        songs={songs}
        currentDifficulty={currentFilter.difficulty}
      />
    </>
  );
}

export default App;
