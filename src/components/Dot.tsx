import styled from "styled-components";
import { Dots } from "../types/Dots";

const StyledDot = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: pink;
  border: 1px solid hotpink;
  transform: translate(-50%, -50%);
`;

const Dot = ({ x, y }: Dots) => {
  return <StyledDot style={{ left: x, top: y }} />;
};

export default Dot;
