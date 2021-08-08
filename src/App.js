import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';
import Difficulty from './Difficulty';
import Genre from './Genre';



function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState(Difficulty.Oni);
  const [isListingUra, setListingUra] = useState(true);
  const [currentGenre, setCurrentGenre] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(10);

  const onChangeDifficulty = (e) => {
    const value = e.target.value;
    let newDifficulty = null;
    if (value === '귀신') {
      newDifficulty = Difficulty.Oni;
      setCurrentLevel(10);
    } else {
      newDifficulty = Difficulty.Hard;
      setCurrentLevel(8);
    }

    if (currentDifficulty !== newDifficulty) {
      setCurrentDifficulty(newDifficulty);
    }
  }

  const onCheckUra = (e) => {
    setListingUra(e.target.checked);
  }

  const onChangeGenre = (e) => {
    const newGenre = Genre.getGenre(e.target.value);
    setCurrentGenre(newGenre);
  }

  const onChangeLevel = (e) => {
    const newLevel = +e.target.value;
    if (newLevel !== currentLevel) {
      setCurrentLevel(newLevel);
    }
  }

  return (
    <>
      <Header
        currentDifficulty={currentDifficulty}
        isListingUra={isListingUra}
        currentLevel={currentLevel}
        onChangeDifficulty={onChangeDifficulty}
        onCheckUra={onCheckUra}
        onChangeGenre={onChangeGenre}
        onChangeLevel={onChangeLevel}
      />
    </>
  );
}

export default App;
