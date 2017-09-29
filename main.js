import { Observable } from "rxjs/Observable";
import { bindCallback } from "rxjs/add/observable/bindCallback";

const log = val => console.log(val);

const fetch = (url, callback) => {
  callback("data");
};

const rxFetch = Observable.bindCallback(fetch);
rxFetch("url").subscribe(log);
