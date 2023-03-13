// Hooks
import useKeyboard from "./hooks/useKeyboard";
import { useState } from "react";
// CSS
import styled from "styled-components";
// Components
import HangmanLetters from "./components/HangmanLetters";
import Keyboard from "./components/Keyboard";
import Hangman_drawing from "./components/HangmanDrawing";
import RestartGame from "./components/RestartGame";
// Words
import { words } from './words';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 800px;
`;

const KeyboardWrapper = styled.div`
  height: 20%;
`;

const LineUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [wordGuess, setWordGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordGuess.includes(letter)
  );

  const correctLetters = guessedLetters.filter((letter) =>
    wordGuess.includes(letter)
  );

  let loser = incorrectGuesses.length >= 6;
  let winner = wordGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const { addGuessedLetters } = useKeyboard({
    guessedLetters,
    setGuessedLetters,
    loser,
    winner,
  });

  const handleRestart = () => {
    setWordGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    winner = false;
    loser = false;
  };

  useKeyboard({ guessedLetters, setGuessedLetters, loser, winner });

  return (
    <LineUp>
      <h1>Jogo da Forca</h1>
      <Wrapper>
        {loser && (
          <>
            <h2>Você perdeu. Tente novamente :&#40;</h2>
            <RestartGame handleRestart={handleRestart} />
          </>
        )}

        {winner && (
          <>
            <h2>Você ganhou! Parabéns! :&#41;</h2>
            <RestartGame handleRestart={handleRestart} />
          </>
        )}

        <Hangman_drawing numberOfGuesses={incorrectGuesses.length} />
        <HangmanLetters
          reveal={loser}
          guessedLetters={guessedLetters}
          wordGuess={wordGuess}
        />
      </Wrapper>

      {!loser && !winner && (
        <KeyboardWrapper>
          <Keyboard
            activeLetters={correctLetters}
            inactiveLetters={incorrectGuesses}
            addGuessedLetters={addGuessedLetters}
          />
        </KeyboardWrapper>
      )}
    </LineUp>
  );
};

export default App;
