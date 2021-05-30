import { Status } from '../../../types/statusType';
import stopwatchService from '../../../_services/stopwatchService';

const StartButton = () => (
  <button
    onClick={() => stopwatchService.setStatus(Status.START)}
    className="start-button"
  >
    Start
  </button>
);

export { StartButton };
