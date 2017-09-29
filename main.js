import { Observable } from "rxjs/Observable";
import { timer } from "rxjs/add/observable/timer";

const log = val => console.log(val);
Observable.timer(500, 500).subscribe(log);
//if initial delay set to 0, it will emit value immediately
