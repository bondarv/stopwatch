import './App.css';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectStatus } from './features/controls/controlsSlice';
import ControlButtons from './features/controls/ControlButtons';
import Timer from './features/Timer';

function App() {
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  return (
    <div className="app">
      <h3>Stopwatch</h3>
      <div className="card">
        <Timer status={status} dispatch={dispatch} />
        <ControlButtons status={status} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
