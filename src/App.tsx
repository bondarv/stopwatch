import './App.css';
import { selectStatus } from './features/controls/controlsSlice';
import ControlButtons from './features/controls/ControlButtons';
import { useAppSelector } from './app/hooks';
import Timer from './features/Timer';

function App() {
  const status = useAppSelector(selectStatus);

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
