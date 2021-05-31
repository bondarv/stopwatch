import { AppDispatch } from '../../../app/store';
import { reset } from '../controlsSlice';

interface ResetButtonProps {
  isDisabled: boolean;
  dispatch: AppDispatch;
}

const ResetButton = ({ isDisabled, dispatch }: ResetButtonProps) => (
  <button
    onClick={() => dispatch(reset())}
    className="reset-button"
    disabled={isDisabled}
  >
    Reset
  </button>
);

export { ResetButton };
