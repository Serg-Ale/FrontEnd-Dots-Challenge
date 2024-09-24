interface ButtonWrapperProps {
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const ButtonWrapper = ({
  onUndo,
  onRedo,
  canUndo,
  canRedo,
}: ButtonWrapperProps) => {
  return (
    <div className="button-wrapper">
      <button disabled={!canUndo} onClick={onUndo}>
        Undo
      </button>
      <button disabled={!canRedo} onClick={onRedo}>
        Redo
      </button>
    </div>
  );
};

export default ButtonWrapper;
