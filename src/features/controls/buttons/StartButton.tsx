import { AppDispatch } from '../../../app/store';
import { start } from '../controlsSlice';

interface StartButtonProps {
  dispatch: AppDispatch;
}

const StartButton = ({ dispatch }: StartButtonProps) => (
  <button onClick={() => dispatch(start())} className="start-button">
    Start
  </button>
);

export { StartButton };
