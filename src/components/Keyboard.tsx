import styled from "styled-components";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(75px, 1fr));
  gap: 7.5px;
  width: 600px;
  margin-top: -123px;
`;

const Button = styled.button<{ isActive: boolean }>`
  opacity: ${(p) => (p.isActive ? null : "0.3")};
  background-color: #0c0c0c;
  color: white;
  cursor: ${(p) => (!p.disabled)? 'pointer' : 'not-allowed'};
`;

interface KeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
}

const Keyboard = ({ activeLetters, inactiveLetters, addGuessedLetters }: KeyboardProps) => {
  return (
    <Wrapper>
      {keys.map((letter) => {
        const isActive = !activeLetters.includes(letter);
        const isInactive = !inactiveLetters.includes(letter);

        return (
          <Button onClick={() => addGuessedLetters(letter)} isActive={isActive && isInactive} key={letter} disabled={!(isActive && isInactive)}>
            {letter.toUpperCase()}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default Keyboard;
