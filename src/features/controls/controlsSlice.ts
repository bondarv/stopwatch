import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum Status {
  START = 'START',
  STOP = 'STOP',
  WAIT = 'WAIT',
  RESET = 'RESET',
}

export interface ControlsState {
  status: Status;
}

const initialState: ControlsState = {
  status: Status.STOP,
};

export const controlsSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    start: (state) => {
      state.status = Status.START;
    },
    stop: (state) => {
      state.status = Status.STOP;
    },
    wait: (state) => {
      state.status = Status.WAIT;
    },
    reset: (state) => {
      state.status = Status.RESET;
    },
  },
});

export const { start, stop, wait, reset } = controlsSlice.actions;

export const selectStatus = (state: RootState) => state.controls.status;

export default controlsSlice.reducer;
