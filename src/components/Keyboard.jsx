export const Keyboard = ({
  guessedLetters,
  wrongLetters,
  handleGuess,
  gameOver,
  handleRestart
}) => {
  return (
    <>
      <div className="mb-4">
        {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            className={`px-4 py-2 m-1 ${guessedLetters.includes(letter) || wrongLetters.includes(letter) ? 'bg-gray-400' : 'bg-blue-500 text-white'} rounded`}
            disabled={guessedLetters.includes(letter) || wrongLetters.includes(letter) || gameOver}
          >
            {letter}
          </button>
        ))}
      </div>
      {gameOver && (
        <button onClick={handleRestart} className="bg-green-500 w-28 m-auto text-white px-4 py-2 rounded">
          Reiniciar
        </button>
      )}
      <span className="text-gray-500 text-sm">
        Son palabras de tecnología/programación.
      </span>
    </>
  )
}
