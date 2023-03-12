import styled from "styled-components";

const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: white;
  position: absolute;
  right: 0;
  margin-left: 80px;
`;
const Vertical = styled.div`
  height: 250px;
  width: 10px;
  background-color: white;
`;
const Horizontal = styled.div`
  height: 10px;
  width: 200px;
  background-color: white;
`;

const VerticalSmall = styled.div`
  height: 40px;
  width: 10px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
`;
const Head = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 8px solid white;
  position: absolute;
  right: -18.5px;
  top: 39px;
`;

const Body = styled.div`
  height: 60px;
  width: 10px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 82px;
`;
const LeftArm = styled.div`
  height: 10px;
  width: 50px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 100px;
  rotate: 30deg;
`;
const RightArm = styled.div`
  height: 10px;
  width: 50px;
  background-color: white;
  position: absolute;
  right: -38px;
  top: 101px;
  rotate: -30deg;
`;
const RightLeg = styled.div`
  height: 10px;
  width: 40px;
  background-color: white;
  position: absolute;
  right: -29.5px;
  top: 143px;
  rotate: 30deg;
`;
const LeftLeg = styled.div`
  height: 10px;
  width: 40px;
  background-color: white;
  position: absolute;
  right: 0;
  top: 143px;
  rotate: -30deg;
`;

const bodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

interface Hangman_drawingProps {
  numberOfGuesses: number;
}

const Hangman_drawing = ({ numberOfGuesses }: Hangman_drawingProps) => {
  return (
    <div style={{ position: "relative", margin: "1rem 0" }}>
      {bodyParts.slice(0, numberOfGuesses).map((BodyPart, index) => {
        return <BodyPart key={index} />;
      })}
      <VerticalSmall />
      <Horizontal />
      <Vertical />
      <Base />
    </div>
  );
};

export default Hangman_drawing;
