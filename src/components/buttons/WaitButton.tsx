import { Status } from '../../types/stateType';
import stopwatchService from '../../_services/stopwatchService';

interface WaitButtonProps {
  isActive: boolean;
  isDisabled: boolean;
}

function WaitButton({ isActive, isDisabled }: WaitButtonProps) {
  function handleWaitButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    stopwatchService.controlStopwatch({ status: Status.WAIT });
  }

  return (
    <button
      onDoubleClick={handleWaitButton}
      className={`wait-button ${isActive && 'wait-button-active'}`}
      title="Double-click to wait"
      disabled={isDisabled || isActive}
    >
      Wait
    </button>
  );
}

export { WaitButton };
