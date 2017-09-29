import { Observable } from "rxjs/Observable";
import { range } from "rxjs/add/observable/range";

const log = val => console.log(val);
Observable.range(42, 10).subscribe(log);
