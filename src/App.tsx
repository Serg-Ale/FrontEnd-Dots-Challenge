import { useState, type MouseEvent } from "react";
import "./App.css";

interface Dots {
  x: number;
  y: number;
}

function App() {
  const [dots, setDots] = useState<Dots[]>([]);

  const drawn = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setDots([...dots, { x: clientX, y: clientY }]);
  };

  return (
    <div className="app">
      <div className="button-wrapper">
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <div className="click-area" onClick={drawn}>
        {dots.map(({ x, y }: Dots, index: number) => (
          <div key={index} className="dot" style={{ left: x, top: y }} />
        ))}
      </div>
    </div>
  );
}

export default App;
