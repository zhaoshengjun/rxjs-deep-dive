import { Observable } from "rxjs/Observable";
import { fromEvent } from "rxjs/add/observable/fromEvent";

const log = val => console.log(val);
Observable.fromEvent(document, "click").subscribe(log);
//MouseEvent
