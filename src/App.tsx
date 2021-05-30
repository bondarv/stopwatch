import { useState, useEffect } from 'react';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Status } from './types/stateType';
import stopwatchService from './_services/stopwatchService';
import ControlButtons from './components/ControlButtons';

function App() {
  const [state, setState] = useState({ status: Status.STOP, seconds: 0 });
  const { status, seconds } = state;

  useEffect(() => {
    const subscription = stopwatchService.subscribe((newState) =>
      setState((prevState) => ({ ...prevState, ...newState }))
    );
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const period = 1000;
    const subscription = interval(period)
      .pipe(takeWhile(() => status === Status.START))
      .subscribe(() => {
        setState((prevState) => ({
          ...prevState,
          seconds: prevState.seconds + period,
        }));
      });
    return () => subscription.unsubscribe();
  }, [status]);

  const stopwatch = new Date(seconds).toISOString().slice(11, 19);

  return (
    <div className="app">
      <h3>Stopwatch</h3>
      <div className="card">
        <p>{stopwatch}</p>
        <ControlButtons status={status} />
      </div>
    </div>
  );
}

export default App;
