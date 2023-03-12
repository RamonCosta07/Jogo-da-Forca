import { useCallback, useEffect } from "react";

interface useKeyboardProps {
  guessedLetters: string[];
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
  loser: boolean;
  winner: boolean;
}

const useKeyboard = ({
  guessedLetters,
  setGuessedLetters,
  loser,
  winner
}: useKeyboardProps) => {
  const addGuessedLetters = useCallback(
    (letter: string, loser:boolean = false, winner:boolean = false) => {
      if (guessedLetters.includes(letter) || loser || winner) {
        return;
      }
      setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
    },
    [guessedLetters, loser, winner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      const regex = /^[a-z]$/;
      if (!key.match(regex)) return;
      e.preventDefault();
      addGuessedLetters(key, loser, winner);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return {
    addGuessedLetters,
  };
};

export default useKeyboard;
