import { useAppDispatch } from '../../../app/hooks';
import { wait } from '../controlsSlice';

interface WaitButtonProps {
  isActive: boolean;
  isDisabled: boolean;
}

function WaitButton({ isActive, isDisabled }: WaitButtonProps) {
  const dispatch = useAppDispatch();

  function handleWaitButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    dispatch(wait());
  }

  return (
    <button
      onDoubleClick={handleWaitButton}
      className={`wait-button ${isActive && 'wait-button-active'}`}
      title="Double-click to wait"
      disabled={isDisabled || isActive}
    >
      Wait
    </button>
  );
}

export { WaitButton };
