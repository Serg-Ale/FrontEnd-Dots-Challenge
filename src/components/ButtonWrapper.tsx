import styled from "styled-components";

interface ButtonWrapperProps {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const ButtonWrapperContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #444;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #111;
    cursor: not-allowed;
  }
`;

const ButtonWrapper = ({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: ButtonWrapperProps) => {
  return (
    <ButtonWrapperContainer>
      <Button disabled={!canUndo} onClick={onUndo}>
        Undo
      </Button>
      <Button disabled={!canRedo} onClick={onRedo}>
        Redo
      </Button>
    </ButtonWrapperContainer>
  );
};

export default ButtonWrapper;
