// import Rx from "rxjs/Rx";
import { Observable } from "rxjs/Observable";

// Observerable
let obs1 = Observable.create(sub => {
  sub.next("new data");
  sub.next("new data 2");
  // sub.error("error");
  sub.next("new data 3");
  sub.complete();
});

// Observer / Subscriber / Subscription

obs1.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log("done")
});
