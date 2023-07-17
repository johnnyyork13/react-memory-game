import './App.css';
import React from 'react';
import Header from './components/Header';
import CardGrid from './components/CardGrid';
import Restart from './components/Restart';
import PokeLogo from './components/PokeLogo';

export default function App() {

  const [gameSettings, setGameSettings] = React.useState({
    isGameover: false,
    score: 0,
    prevScore: 0,
    endText: ''
  });

  function endGame() {
    setGameSettings((oldSettings) => ({
      ...oldSettings,
      isGameover: true,
      prevScore: oldSettings.score,
    }));
  }

  function increaseScore() {
    setGameSettings((oldSettings) => ({
      ...oldSettings,
      score: oldSettings.score + 1
    }))
    console.log('app score', gameSettings.score);
    if (gameSettings.score === 15) {
      setGameSettings((oldSettings) => ({
        ...oldSettings,
        endText: 'You win! Congratulations!'
      }))
      endGame();
    } else {
      setGameSettings((oldSettings) => ({
        ...oldSettings,
        endText: `Your score was ${oldSettings.score}`
      }))
    }
  }

  function restartGame() {
    setGameSettings((oldSettings) => ({
      ...oldSettings, 
      score: 0,
      isGameover: false,
      endText: ''
    }))
  }

  return (
    <div className="main-container">
      {gameSettings.isGameover && <Restart 
        score={gameSettings.score}
        restartGame={restartGame}
        endText={gameSettings.endText}
      />}
      <Header 
        score={gameSettings.score}
        prevScore={gameSettings.prevScore}
      />
      <CardGrid 
        checkGameover={gameSettings.isGameover}
        isGameover={endGame}
        increaseScore={increaseScore}
        score={gameSettings.score}
      />
      <PokeLogo left={40} top={20} />
      <PokeLogo left={20} top={20} width={150}/>
      <PokeLogo left={10} top={50} width={240}/>
      <PokeLogo left={80} top={30} width={220}/>
      <PokeLogo left={80} top={70} width={150}/>
    </div>
  )
}