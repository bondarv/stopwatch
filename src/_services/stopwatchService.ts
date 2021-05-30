import { Subject } from 'rxjs';
import { Status } from '../types/statusType';

const subject = new Subject();

const stopwatchService = {
  setStatus: (state: Status) => subject.next(state),
  subscribe: (setStatus: (value: Status) => void) =>
    subject.subscribe(setStatus as Partial<Subject<unknown>>),
};

export default stopwatchService;
