import { useAppDispatch } from '../../../app/hooks';
import { start } from '../controlsSlice';

function StartButton() {
  const dispatch = useAppDispatch();

  function handleStartButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    dispatch(start());
  }

  return (
    <button onClick={handleStartButton} className="start-button">
      Start
    </button>
  );
}

export { StartButton };
