import { MouseEvent } from "react";
import Dot from "./Dot";
import { Dots } from "../types/Dots";
import styled from "styled-components";

interface ClickAreaProps {
  dots: Dots[];
  onClick: (event: MouseEvent) => void;
}

const ClickAreaContainer = styled.div`
  border-bottom: 1px solid hotpink;
  flex: 1;
  display: flex;
  position: relative;
`;

const ClickArea = ({ dots, onClick }: ClickAreaProps) => {
  return (
    <ClickAreaContainer onClick={onClick}>
      {dots.map(({ x, y }: Dots, index: number) => (
        <Dot key={`dot-${index}`} x={x} y={y} />
      ))}
    </ClickAreaContainer>
  );
};

export default ClickArea;
