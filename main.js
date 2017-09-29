import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/add/observable/interval";

const log = val => console.log(val);
Observable.interval(1000).subscribe(log);
//MouseEvent
