import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/add/observable/interval";
import "rxjs/add/operator/map";
import "rxjs/add/observable/concat";

const log = val => console.log(val);

const o1 = Observable.interval(1000).map(x => "a" + x);
const o2 = Observable.interval(2000).map(x => "b" + x);
const o3 = Observable.interval(3000).map(x => "c" + x);

Observable.concat(o1, o2).subscribe(log);
// o2 will never start until o1 is complete
