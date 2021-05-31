import { AppDispatch } from '../../../app/store';
import { stop } from '../controlsSlice';

interface StopButtonProps {
  dispatch: AppDispatch;
}

const StopButton = ({ dispatch }: StopButtonProps) => (
  <button onClick={() => dispatch(stop())} className="stop-button">
    Stop
  </button>
);

export { StopButton };
