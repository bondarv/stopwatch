import { cleanup, render, fireEvent } from '@testing-library/react';
import App from '../../App';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('ControlButtons', () => {
  afterEach(cleanup);

  it('should render 3 buttons', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText('Start')).toBeInTheDocument();
    expect(getByText('Wait')).toBeInTheDocument();
    expect(getByText('Reset')).toBeInTheDocument();
  });

  it('should render right buttons', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Should render Stop when press Start
    const startButton = getByText('Start');
    fireEvent.click(startButton);
    expect(getByText('Stop')).toBeInTheDocument();

    // Should render Start when press Wait
    const waitButton = getByText('Wait');
    fireEvent.dblClick(waitButton);
    expect(getByText('Start')).toBeInTheDocument();

    // Click Start after Wait. Should render Stop
    const newStartButton = getByText('Start');
    fireEvent.click(newStartButton);
    expect(getByText('Stop')).toBeInTheDocument();

    // Should render Start when press Stop
    const stopButton = getByText('Stop');
    fireEvent.click(stopButton);
    expect(getByText('Start')).toBeInTheDocument();
  });

  it('Wait button should work when double-clicking', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const startButton = getByText('Start');
    fireEvent.click(startButton);
    expect(getByText('Stop')).toBeInTheDocument();

    const waitButton = getByText('Wait');
    fireEvent.click(waitButton);
    expect(getByText('Stop')).toBeInTheDocument();
    fireEvent.dblClick(waitButton);
    expect(getByText('Start')).toBeInTheDocument();

    expect((waitButton as HTMLInputElement).disabled).toBe(true);

    const newStartButton = getByText('Start');
    fireEvent.click(newStartButton);
    const newStopButton = getByText('Stop');
    fireEvent.click(newStopButton);
  });

  it('Wait and Reset button disabled/enabled', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const waitButton = getByText('Wait');
    expect((waitButton as HTMLInputElement).disabled).toBe(true);

    const resetButton = getByText('Reset');
    expect((resetButton as HTMLInputElement).disabled).toBe(true);

    const startButton = getByText('Start');
    fireEvent.click(startButton);
    expect((waitButton as HTMLInputElement).disabled).toBe(false);
    expect((resetButton as HTMLInputElement).disabled).toBe(false);
  });
});
