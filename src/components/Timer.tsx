import { useState, useEffect } from 'react';
import { interval } from 'rxjs';
import { Status } from '../types/statusType';
import stopwatchService from '../_services/stopwatchService';

interface TimerProps {
  status: Status;
}

function Timer({ status }: TimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (status === Status.STOP) {
      setSeconds(0);
    }

    if (status === Status.RESET) {
      setSeconds(0);
      stopwatchService.setStatus(Status.START);
    }

    if (status === Status.START) {
      const period = 1000;
      const subscription = interval(period).subscribe(() =>
        setSeconds((seconds) => seconds + period)
      );
      return () => subscription.unsubscribe();
    }
  }, [status]);

  const timer = new Date(seconds).toISOString().slice(11, 19);

  return <p>{timer}</p>;
}

export default Timer;
