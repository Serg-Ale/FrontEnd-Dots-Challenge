import { useState, type MouseEvent } from "react";
import "./App.css";

interface Dots {
  x: number;
  y: number;
}

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
      <div className="button-wrapper">
        <button disabled={dots.length === 0} onClick={undo}>
          Undo
        </button>
        <button disabled={cach.length === 0} onClick={redo}>
          Redo
        </button>
      </div>
      <div className="click-area" onClick={setDotCoordinates}>
        {dots.map(({ x, y }: Dots, index: number) => (
          <div
            className="dot"
            key={`dot-${index}`}
            style={{ left: x, top: y }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
