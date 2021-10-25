import './App.css';
import Header from './header/Header';
import { useState } from 'react';
import Difficulty from './constants/Difficulty';
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

  return (
    <>
      <FilterContext.Provider value={{ currentFilter, setCurrentFilter }}>
        <Header />
        <Main />
      </FilterContext.Provider>
      <Footer />
    </>
  );
}

export default App;
