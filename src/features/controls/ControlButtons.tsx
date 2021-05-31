import { AppDispatch } from '../../app/store';
import { Status } from './controlsSlice';
import { StartButton, StopButton, WaitButton, ResetButton } from './buttons';

interface ControlButtonsProps {
  status: Status;
  dispatch: AppDispatch;
}

const ControlButtons = ({ status, dispatch }: ControlButtonsProps) => (
  <div className="buttons">
    {status === Status.STOP || status === Status.WAIT ? (
      <StartButton dispatch={dispatch} />
    ) : (
      <StopButton dispatch={dispatch} />
    )}
    <WaitButton
      isDisabled={status === Status.STOP}
      isActive={status === Status.WAIT}
      dispatch={dispatch}
    />
    <ResetButton isDisabled={status === Status.STOP} dispatch={dispatch} />
  </div>
);

export default ControlButtons;
