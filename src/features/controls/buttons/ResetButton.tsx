import { useAppDispatch } from '../../../app/hooks';
import { reset } from '../controlsSlice';

interface ResetButtonProps {
  isDisabled: boolean;
}

function ResetButton({ isDisabled }: ResetButtonProps) {
  const dispatch = useAppDispatch();

  function handleResetButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    dispatch(reset());
  }

  return (
    <button
      onClick={handleResetButton}
      className="reset-button"
      disabled={isDisabled}
    >
      Reset
    </button>
  );
}

export { ResetButton };
