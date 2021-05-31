import { AppDispatch } from '../../app/store';
import { Status } from './controlsSlice';
import { StartButton, StopButton, WaitButton, ResetButton } from './buttons';

interface ControlButtonsProps {
  status: Status;
  dispatch: AppDispatch;
}

function ControlButtons({ status, dispatch }: ControlButtonsProps) {
  const isStop = status === Status.STOP;
  const isWait = status === Status.WAIT;

  return (
    <div className="buttons">
      {isStop || isWait ? (
        <StartButton dispatch={dispatch} />
      ) : (
        <StopButton dispatch={dispatch} />
      )}
      <WaitButton
        isDisabled={isStop || isWait}
        isActive={isWait}
        dispatch={dispatch}
      />
      <ResetButton isDisabled={isStop} dispatch={dispatch} />
    </div>
  );
}

export default ControlButtons;
