import { useEffect } from 'react';
import { Status } from '../../types/stateType';
import stopwatchService from '../../_services/stopwatchService';
import waitService from '../../_services/waitService';

interface WaitButtonProps {
  isActive: boolean;
  isDisabled: boolean;
}

function WaitButton({ isActive, isDisabled }: WaitButtonProps) {
  useEffect(() => {
    const subscription = waitService.subscribe(() =>
      stopwatchService.controlStopwatch({ status: Status.WAIT })
    );
    return () => subscription.unsubscribe();
  }, []);

  function handleWaitButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    waitService.onWait(null);
  }

  return (
    <button
      onClick={handleWaitButton}
      className={`wait-button ${isActive && 'wait-button-active'}`}
      title="Double-click to wait"
      disabled={isDisabled || isActive}
    >
      Wait
    </button>
  );
}

export { WaitButton };
