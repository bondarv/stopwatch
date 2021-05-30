import { Status } from '../../../types/statusType';
import stopwatchService from '../../../_services/stopwatchService';

const StopButton = () => (
  <button
    onClick={() => stopwatchService.setStatus(Status.STOP)}
    className="stop-button"
  >
    Stop
  </button>
);

export { StopButton };
