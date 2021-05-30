import { Status } from '../../types/stateType';
import stopwatchService from '../../_services/stopwatchService';

function StopButton() {
  function handleStopButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    stopwatchService.controlStopwatch({ status: Status.STOP, seconds: 0 });
  }

  return (
    <button onClick={handleStopButton} className="stop-button">
      Stop
    </button>
  );
}

export { StopButton };
