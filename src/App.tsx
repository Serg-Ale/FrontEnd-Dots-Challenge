import { useState, MouseEvent } from "react";
import ButtonWrapper from "./components/ButtonWrapper";
import ClickArea from "./components/ClickArea";
import { Dots } from "./types/Dots";
import "./App.css";

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
    <div className="app">
      <ButtonWrapper
        onUndo={undo}
        onRedo={redo}
        canUndo={dots.length > 0}
        canRedo={cach.length > 0}
      />
      <ClickArea dots={dots} onClick={setDotCoordinates} />
    </div>
  );
}

export default App;
