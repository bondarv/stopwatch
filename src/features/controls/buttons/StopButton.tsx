import { useAppDispatch } from '../../../app/hooks';
import { stop } from '../controlsSlice';

function StopButton() {
  const dispatch = useAppDispatch();

  function handleStopButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    dispatch(stop());
  }

  return (
    <button onClick={handleStopButton} className="stop-button">
      Stop
    </button>
  );
}

export { StopButton };
