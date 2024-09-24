interface DotProps {
  x: number;
  y: number;
}

const Dot = ({ x, y }: DotProps) => {
  return <div className="dot" style={{ left: x, top: y }} />;
};

export default Dot;
