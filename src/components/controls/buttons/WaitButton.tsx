import { useEffect } from 'react';
import { Status } from '../../../types/statusType';
import stopwatchService from '../../../_services/stopwatchService';
import waitService from '../../../_services/waitService';

interface WaitButtonProps {
  isActive: boolean;
  isDisabled: boolean;
}

function WaitButton({ isActive, isDisabled }: WaitButtonProps) {
  useEffect(() => {
    const subscription = waitService.subscribe(() =>
      stopwatchService.setStatus(Status.WAIT)
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <button
      onClick={() => waitService.onWait(null)}
      className={`wait-button ${isActive && 'wait-button-active'}`}
      title="Double-click to wait"
      disabled={isDisabled || isActive}
    >
      Wait
    </button>
  );
}

export { WaitButton };
