import { useState, useEffect } from 'react';
import { Status } from './types/statusType';
import stopwatchService from './_services/stopwatchService';
import Timer from './components/Timer';
import ControlButtons from './components/controls/ControlButtons';
import './App.css';

function App() {
  const [status, setStatus] = useState(Status.STOP);

  useEffect(() => {
    const subscription = stopwatchService.subscribe((newStatus) =>
      setStatus(newStatus)
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="app">
      <h3>Stopwatch</h3>
      <div className="card">
        <Timer status={status} />
        <ControlButtons status={status} />
      </div>
    </div>
  );
}

export default App;
