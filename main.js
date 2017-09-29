import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/observable/merge";

const log = val => console.log(val);

const o1 = Observable.interval(1000).map(x => "a" + x);
const o2 = Observable.interval(2000).map(x => "b" + x);
const o3 = Observable.interval(3000).map(x => "c" + x);

Observable.merge(o1, o2, o3).subscribe(log);
// whenever there's a value, the observable will emit.
