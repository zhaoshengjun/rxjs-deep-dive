// import Rx from "rxjs/Rx";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

// Observerable
let obs1 = Observable.create(sub => {
  sub.next(1);
  sub.next(2);
  sub.next(3);
  sub.complete();
});

// Observer / Subscriber / Subscription

obs1.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log("done")
});

// Operator
let obs2 = obs1.map(x => x + 100);
obs2.subscribe(console.log);
