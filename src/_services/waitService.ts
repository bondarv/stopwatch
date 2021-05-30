import { Subject } from 'rxjs';
import { map, bufferCount, filter } from 'rxjs/operators';

const subject = new Subject();

const subscribe = (observer: () => void) =>
  subject
    .pipe(
      map(() => new Date().getTime()),
      bufferCount(2, 1),
      filter((timestamps) => timestamps[0] > new Date().getTime() - 300)
    )
    .subscribe(observer);

const waitService = {
  onWait: (value: null) => subject.next(value),
  subscribe,
};

export default waitService;
