import { useState, useEffect } from 'react';
import { Keyboard } from './components/Keyboard';
import { words } from './API';
import { LogoHangman } from './components/icons/LogoHangman';

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [maxAttempts, setMaxAttempts] = useState(9);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  useEffect(() => {
    if (word) {
      const isWordGuessed = word.split('').every(letter => guessedLetters.includes(letter));
      if (isWordGuessed) {
        setWon(true);
        setGameOver(true);
      }
    }
  }, [guessedLetters, word]);

  useEffect(() => {
    if (wrongLetters.length >= maxAttempts) {
      setGameOver(true);
    }
  }, [wrongLetters]);

  useEffect(() => {
    if (gameOver) {
      const storedResults = JSON.parse(localStorage.getItem('hangmanResults')) || [];
      const newResult = { word, won };
      storedResults.push(newResult);
      localStorage.setItem('hangmanResults', JSON.stringify(storedResults));
    }
  }, [gameOver]);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || wrongLetters.includes(letter) || gameOver) return;

    if (word.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    } else {
      setWrongLetters([...wrongLetters, letter]);
    }
  };

  const handleRestart = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongLetters([]);
    setMaxAttempts(9);
    setGameOver(false);
    setWon(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="flex flex-col gap-3 bg-white p-6 rounded-2xl shadow-xl text-center max-w-4xl w-full">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <h1 className="text-4xl font-bold">
            H A N G M A N
          </h1>
          <LogoHangman className="w-8 h-8" />
        </div>
        <div className="mb-4 overflow-x-scroll sm:overflow-x-auto">
          {word.split('').map((letter, index) => (
            <span key={index} className="text-3xl mx-2">
              {guessedLetters.includes(letter) ? letter : '_'}
            </span>
          ))}
        </div>
        <div className="mb-4">
          {gameOver ? (
            <p className="text-xl font-bold">
              {won ? '¡Ganaste!' : '¡Perdiste!'} La palabra era "{word}".
            </p>
          ) : (
            <p className="text-xl">Tienes: {maxAttempts - wrongLetters.length} intentos.</p>
          )}
        </div>
        <Keyboard
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          handleGuess={handleGuess}
          gameOver={gameOver}
          handleRestart={handleRestart}
        />
      </div>
    </div>
  );
}

export default App;
