import { Status } from '../../../types/statusType';
import stopwatchService from '../../../_services/stopwatchService';

interface ResetButtonProps {
  isDisabled: boolean;
}

const ResetButton = ({ isDisabled }: ResetButtonProps) => (
  <button
    onClick={() => stopwatchService.setStatus(Status.RESET)}
    className="reset-button"
    disabled={isDisabled}
  >
    Reset
  </button>
);

export { ResetButton };
