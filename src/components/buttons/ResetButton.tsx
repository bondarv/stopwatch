import { Status } from '../../types/stateType';
import stopwatchService from '../../_services/stopwatchService';

interface ResetButtonProps {
  isDisabled: boolean;
}

function ResetButton({ isDisabled }: ResetButtonProps) {
  function handleResetButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    stopwatchService.controlStopwatch({ status: Status.START, seconds: 0 });
  }

  return (
    <button
      onClick={handleResetButton}
      className="reset-button"
      disabled={isDisabled}
    >
      Reset
    </button>
  );
}

export { ResetButton };
