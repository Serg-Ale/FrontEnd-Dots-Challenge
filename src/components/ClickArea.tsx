import { MouseEvent } from "react";
import Dot from "./Dot";
import { Dots } from "../types/Dots";

interface ClickAreaProps {
  dots: Dots[];
  onClick: (event: MouseEvent) => void;
}

const ClickArea = ({ dots, onClick }: ClickAreaProps) => {
  return (
    <div className="click-area" onClick={onClick}>
      {dots.map(({ x, y }, index) => (
        <Dot key={`dot-${index}`} x={x} y={y} />
      ))}
    </div>
  );
};

export default ClickArea;
