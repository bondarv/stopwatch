import { Status } from '../../types/statusType';
import { StartButton, StopButton, WaitButton, ResetButton } from './buttons';

interface ControlButtonsProps {
  status: Status;
}

function ControlButtons({ status }: ControlButtonsProps) {
  const isStop = status === Status.STOP;
  const isWait = status === Status.WAIT;

  return (
    <div className="buttons">
      {isStop || isWait ? <StartButton /> : <StopButton />}
      <WaitButton isDisabled={isStop || isWait} isActive={isWait} />
      <ResetButton isDisabled={isStop} />
    </div>
  );
}

export default ControlButtons;
