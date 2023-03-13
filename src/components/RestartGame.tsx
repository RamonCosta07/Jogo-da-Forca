import styled from "styled-components";

type Props = {
  handleRestart: () => void;
};

const Button = styled.button`
  padding: 1.5rem;
  margin: 1rem 0;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;

  &:hover{
    background-color: white;
    color: green;
    font-weight: bold;
  }
`;

const RestartGame = ({ handleRestart }: Props) => {
  return <Button onClick={handleRestart}>Reiniciar</Button>;
};

export default RestartGame;