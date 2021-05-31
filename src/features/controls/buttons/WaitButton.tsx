import { AppDispatch } from '../../../app/store';
import { wait } from '../controlsSlice';

interface WaitButtonProps {
  isActive: boolean;
  isDisabled: boolean;
  dispatch: AppDispatch;
}

const WaitButton = ({ isActive, isDisabled, dispatch }: WaitButtonProps) => (
  <button
    onDoubleClick={() => dispatch(wait())}
    className={`wait-button ${isActive && 'wait-button-active'}`}
    title="Double-click to wait"
    disabled={isDisabled}
  >
    Wait
  </button>
);

export { WaitButton };
