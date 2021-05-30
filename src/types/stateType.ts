export enum Status {
  START = 'START',
  STOP = 'STOP',
  WAIT = 'WAIT',
}

export interface State {
  status: Status;
  seconds?: number;
}

export type SetStateObserver = (value: State) => void;
