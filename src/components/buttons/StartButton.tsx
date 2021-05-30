import { Status } from '../../types/stateType';
import stopwatchService from '../../_services/stopwatchService';

function StartButton() {
  function handleStartButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    stopwatchService.controlStopwatch({ status: Status.START });
  }

  return (
    <button onClick={handleStartButton} className="start-button">
      Start
    </button>
  );
}

export { StartButton };
