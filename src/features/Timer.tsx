import { useState, useEffect } from 'react';
import { AppDispatch } from '../app/store';
import { Status, start } from './controls/controlsSlice';

interface TimerProps {
  status: Status;
  dispatch: AppDispatch;
}

function Timer({ status, dispatch }: TimerProps) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (status === Status.STOP) {
      setSeconds(0);
    }

    if (status === Status.RESET) {
      setSeconds(0);
      dispatch(start());
    }

    if (status === Status.START) {
      const period = 1000;
      const timer = setInterval(
        () => setSeconds((seconds) => seconds + period),
        period
      );
      return () => clearInterval(timer);
    }
  }, [status, dispatch]);

  const timer = new Date(seconds).toISOString().slice(11, 19);

  return <p>{timer}</p>;
}

export default Timer;
