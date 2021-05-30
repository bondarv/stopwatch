import { Subject } from 'rxjs';
import { State, SetStateObserver } from '../types/stateType';

const subject = new Subject();

const stopwatchService = {
  controlStopwatch: (state: State) => subject.next(state),
  subscribe: (setState: SetStateObserver) =>
    subject.subscribe(setState as Partial<Subject<unknown>>),
};

export default stopwatchService;
