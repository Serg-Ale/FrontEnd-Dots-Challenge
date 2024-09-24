import { useState, MouseEvent } from "react";
import ButtonWrapper from "./components/ButtonWrapper";
import ClickArea from "./components/ClickArea";
import { Dots } from "./types/Dots";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [dots, setDots] = useState<Dots[]>([]);
  const [cach, setCach] = useState<Dots[]>([]);

  const setDotCoordinates = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setDots([...dots, { x: clientX, y: clientY }]);
  };

  const undo = () => {
    if (dots.length > 0) {
      const newDots = [...dots];
      const lastDot = newDots.pop() as Dots;
      Promise.all([setCach([...cach, lastDot]), setDots(newDots)]);
    }
  };

  const redo = () => {
    if (cach.length > 0) {
      const newCach = [...cach];
      const lastCach = newCach.pop() as Dots;
      Promise.all([setDots([...dots, lastCach]), setCach(newCach)]);
    }
  };

  return (
    <AppContainer>
      <ClickArea dots={dots} onClick={setDotCoordinates} />

      <ButtonWrapper
        onUndo={undo}
        onRedo={redo}
        canUndo={dots.length > -1}
        canRedo={cach.length > -1}
      />
    </AppContainer>
  );
}

export default App;
