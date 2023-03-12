import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  font-family: monospace;
`;

const LetterSpan = styled.span`
  border-bottom: 0.1em solid white;
  display: inline-block;
  margin-right: 0.2rem;
  margin-bottom: 2rem;
  min-width: 50px;
`;

interface HangmanWordsProps {
  reveal: boolean;
  wordGuess: string;
  guessedLetters: string[];
}

const Hangman_letters = ({
  reveal,
  wordGuess,
  guessedLetters,
}: HangmanWordsProps) => {
  return (
    <Wrapper>
      <h1>
        {wordGuess.split("").map((letter, index) => (
          <LetterSpan key={index}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "orange" : "",
              }}
            >
              {letter}
            </span>
          </LetterSpan>
        ))}
      </h1>
    </Wrapper>
  );
};

export default Hangman_letters;
