import { Observable } from "rxjs/Observable";
import { bindNodeCallback } from "rxjs/add/observable/bindNodeCallback";

const log = val => console.log(val);

const fetch = (url, callback) => {
  callback(null, "data");
};

const rxFetch = Observable.bindNodeCallback(fetch);
rxFetch("url").subscribe(log);
