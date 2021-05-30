import { Status } from './controlsSlice';
import { StartButton, StopButton, WaitButton, ResetButton } from './buttons';

interface ControlButtonsProps {
  status: Status;
}

const ControlButtons = ({ status }: ControlButtonsProps) => (
  <div className="buttons">
    {status === Status.STOP || status === Status.WAIT ? (
      <StartButton />
    ) : (
      <StopButton />
    )}
    <WaitButton
      isDisabled={status === Status.STOP}
      isActive={status === Status.WAIT}
    />
    <ResetButton isDisabled={status === Status.STOP} />
  </div>
);

export default ControlButtons;
