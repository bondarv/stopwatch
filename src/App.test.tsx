import { cleanup, render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    cleanup();
  });

  it('should render right time', async () => {
    const { getByText, findByText } = render(<App />);

    expect(getByText('00:00:00')).toBeInTheDocument();

    // Start the stopwatch
    const startButton = getByText('Start');
    fireEvent.click(startButton);
    expect(await findByText('00:00:01')).toBeInTheDocument();

    // Reset the stopwatch
    const resetButton = getByText('Reset');
    fireEvent.click(resetButton);
    expect(getByText('00:00:00')).toBeInTheDocument();
    expect(await findByText('00:00:01')).toBeInTheDocument();

    // Wait
    const waitButton = getByText('Wait');
    fireEvent.click(waitButton);
    fireEvent.click(waitButton);
    jest.advanceTimersByTime(1001);
    expect(getByText('00:00:01')).toBeInTheDocument();

    // Start the stopwatch after wait
    const newStartButton = getByText('Start');
    fireEvent.click(newStartButton);
    expect(await findByText('00:00:02')).toBeInTheDocument();

    // Stop the stopwatch
    const stopButton = getByText('Stop');
    fireEvent.click(stopButton);
    expect(getByText('00:00:00')).toBeInTheDocument();
  });
});
